import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const directory = path.join(root, 'src/content/notes');
const files = (await readdir(directory)).filter(name => name.endsWith('.mdx'));
const errors = [];
const lessons = [];
const stringLiteral = '"(?:\\\\.|[^"\\\\])*"';
const wordPattern = new RegExp(`\\{\\s*korean:\\s*(${stringLiteral}),\\s*rom:\\s*(${stringLiteral}),\\s*english:\\s*(${stringLiteral})\\s*,?\\s*\\}`, 'gu');
const fail = (slug, message) => errors.push(`${slug}: ${message}`);

for (const filename of files) {
  const source = await readFile(path.join(directory, filename), 'utf8');
  const metadata = source.split('---')[1] ?? '';
  const category = metadata.match(/^category:\s*\[(.*)\]/m)?.[1] ?? '';
  if (!category.includes('"KOREAN"') || !category.includes('"LEARN"')) continue;
  const slug = filename.slice(0, -4);
  const words = [...source.matchAll(wordPattern)].map(match => ({
    korean: JSON.parse(match[1]), rom: JSON.parse(match[2]), english: JSON.parse(match[3]),
  }));
  const unique = new Set(words.map(word => word.korean.normalize('NFC').trim()));
  if (unique.size < 20) fail(slug, `needs at least 20 distinct vocabulary entries; found ${unique.size}`);
  if (unique.size !== words.length) fail(slug, 'duplicate vocabulary entries');
  if (words.length !== (source.match(/\bkorean\s*:/g) ?? []).length) fail(slug, 'unrecognised vocabulary entry format');
  for (const word of words) {
    if (![word.korean, word.rom, word.english].every(value => value.trim())) fail(slug, 'empty vocabulary field');
    if (!/[가-힣]/u.test(word.korean)) fail(slug, `missing Korean script: ${word.korean}`);
    if (/[가-힣]/u.test(word.rom)) fail(slug, `unromanized reading: ${word.korean}`);
  }
  for (const component of ['KoreanLessonHead', 'SentenceBlock', 'VocabTable', 'Hint']) {
    if (!source.includes(`import ${component} from`)) fail(slug, `missing ${component} import`);
  }
  if ((source.match(/<KoreanLessonHead\b/g) ?? []).length !== 1) fail(slug, 'needs one shared lesson head');
  if (!source.includes('### Vocabulary')) fail(slug, 'missing Vocabulary heading');
  const customLevels = source.match(/<KoreanLessonHead[^>]*levels=\{\[([^\]]+)\]\}/)?.[1];
  const levels = customLevels ? [...customLevels.matchAll(/['"](formal|polite|casual)['"]/g)].map(match => match[1]) : ['formal', 'polite', 'casual'];
  const examples = [...source.matchAll(/<SentenceBlock\b([\s\S]*?)\/>/g)];
  if (examples.length < 3) fail(slug, `needs several sentence examples; found ${examples.length}`);
  for (const [index, example] of examples.entries()) {
    const props = Object.fromEntries([...example[1].matchAll(/(\w+)="([^"]*)"/g)].map(match => [match[1], match[2]]));
    for (const key of [...levels.flatMap(level => [level, `${level}Rom`]), 'english']) {
      if (!props[key]?.trim()) fail(slug, `example ${index + 1}: missing ${key}`);
    }
  }
  const links = [...source.matchAll(/(?:\]\(|href=")\/notes\/([^"\s)#?]+)[^)]*/g)].map(match => match[1].replace(/\/$/, ''));
  for (const target of links) if (!files.includes(`${target}.mdx`)) fail(slug, `broken lesson link: ${target}`);
  const order = Number(metadata.match(/^order:\s*([\d.]+)/m)?.[1]);
  const level = metadata.match(/^level:\s*"([^"]+)"/m)?.[1];
  if (!Number.isInteger(order) || order < 1) fail(slug, 'order must be a positive integer');
  if (!['TOPIK I', 'TOPIK II'].includes(level)) fail(slug, 'missing recognised Korean navigation level');
  lessons.push({ slug, level, order, vocabulary: words.length, examples: examples.length });
}
for (const level of ['TOPIK I', 'TOPIK II']) {
  const orders = lessons.filter(lesson => lesson.level === level).map(lesson => lesson.order).sort((a, b) => a - b);
  if (!orders.every((order, index) => order === index + 1)) fail(level, 'course orders must be unique and consecutive');
}
const mapping = JSON.parse(await readFile(path.join(root, 'src/data/korean/sejong-lesson-map.json'), 'utf8'));
for (const item of mapping) {
  const lesson = lessons.find(lesson => lesson.slug === item.slug);
  if (!lesson) fail(item.slug, 'crosswalk points to a missing lesson');
  else if (lesson.level !== item.level || lesson.order !== item.order) fail(item.slug, 'crosswalk order/level is stale');
}
for (const book of ['2B', '3A', '3B', '4A', '4B']) {
  const units = mapping.filter(item => item.book === book).map(item => item.unit).sort((a, b) => a - b);
  if (units.length !== 12 || !units.every((unit, index) => unit === index + 1)) fail(book, 'crosswalk must cover units 1–12 exactly once');
}
const curriculum = JSON.parse(await readFile(path.join(root, 'src/data/korean/sejong-curriculum-map.json'), 'utf8'));
const expectedBooks = ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B'];
if (curriculum.books.length !== expectedBooks.length || new Set(curriculum.books.map(book => book.book)).size !== expectedBooks.length) {
  fail('curriculum', 'needs eight distinct reference books');
}
let grammarSlots = 0;
for (const name of expectedBooks) {
  const book = curriculum.books.find(book => book.book === name);
  const expectedUnits = name === '1A' ? 10 : 12;
  if (!book || book.units.length !== expectedUnits) {
    fail(name, `needs ${expectedUnits} source units`);
    continue;
  }
  for (const [index, unit] of book.units.entries()) {
    if (unit.unit !== index + 1 || unit.grammar.length !== 2) fail(name, `invalid source unit ${unit.unit}`);
    for (const point of unit.grammar) {
      grammarSlots++;
      if (!point.form?.trim() || !point.lessons?.length) fail(name, `unmapped grammar in unit ${unit.unit}`);
      if (!point.referencePages?.length || !point.referencePages.every(page => Number.isInteger(page) && page > 0)) fail(name, `missing source page in unit ${unit.unit}`);
      for (const slug of point.lessons ?? []) if (!lessons.some(lesson => lesson.slug === slug)) fail(name, `missing mapped lesson: ${slug}`);
    }
  }
}
if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`FAIL: ${errors.length} issue(s) across ${lessons.length} Korean lessons.`);
  process.exitCode = 1;
} else {
  console.log(`PASS: ${lessons.length} Korean lessons; vocabulary range ${Math.min(...lessons.map(l => l.vocabulary))}–${Math.max(...lessons.map(l => l.vocabulary))}; ${lessons.reduce((n, l) => n + l.vocabulary, 0)} entries in total.`);
  console.log(`PASS: ${grammarSlots} grammar slots mapped across eight reference books.`);
  console.log('PASS: example fields, reading controls, components, internal lesson links, consecutive course order, and Sejong crosswalk.');
}
