import { getCollection } from 'astro:content';
import { lessonSearchText } from '../lib/lessonSearch';

export async function GET() {
  const notes = await getCollection('notes');
  return new Response(JSON.stringify(Object.fromEntries(notes.map(note => [
    note.slug || note.id,
    lessonSearchText(`${note.data.title} ${note.data.description ?? ''} ${(note.data.tags ?? []).join(' ')} ${note.body ?? ''}`),
  ]))), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
