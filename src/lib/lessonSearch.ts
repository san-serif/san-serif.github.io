// Include prose and MDX component values (sentences, readings and vocabulary),
// without indexing imports or component names. Keep a plain Japanese variant
// so a phrase also matches when its kanji have bracketed furigana in the source.
export function lessonSearchText(body = '') {
  const content = body.replace(/^import\s.*$/gm, '').replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  const text = content.replace(/<[^>]+>/g, tag =>
    [...tag.matchAll(/"([^"\n]*)"|'([^'\n]*)'/g)].map(match => match[1] ?? match[2]).join(' ')
  ).replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
  const plain = text.replace(/\[[^\]\n]+\]/g, '');
  return (plain === text ? text : `${text} ${plain}`).normalize('NFKC').toLowerCase().replace(/\s+/g, ' ').trim();
}
