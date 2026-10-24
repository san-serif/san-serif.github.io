import type { CollectionEntry } from 'astro:content';

// Some grouped HSK lessons teach several forms, so their English title has
// no single honest Chinese equivalent. Show an actual example clause from
// the lesson as a reading cue until that lesson receives an editorial title.
export function chineseTitleCue(note: CollectionEntry<'notes'>): string | null {
  if (!note.data.category.includes('CHINESE') || /[\u3400-\u9fff]/u.test(note.data.title)) return null;
  const match = note.body?.match(/<CSentenceBlock\s+[^>]*simplified="([^"]+)"/u);
  if (!match) return null;
  const clause = match[1].split(/[，,。！？!?]/u)[0].trim();
  if (!clause || !/[\u3400-\u9fff]/u.test(clause)) return null;
  return Array.from(clause).slice(0, 24).join('') + (Array.from(clause).length > 24 ? '…' : '');
}
