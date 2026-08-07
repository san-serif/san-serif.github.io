import type { CollectionEntry } from 'astro:content';

type Note = CollectionEntry<'notes'>;

export const LEVEL_ORDER = ['N5', 'N4', 'N3', 'N2', 'N1', 'TOPIK I', 'TOPIK II'];

// Every lesson title carries its grammar point in the original script as a
// trailing parenthetical — "Give and Take (あげる・くれる・もらう)". The
// script is genuinely useful (it's the fastest way to spot a specific
// grammar point while scanning), so it stays — this just separates it from
// the literal "(" ")" punctuation so the two halves can be styled
// differently: the English title at full weight, the script muted, instead
// of both fighting for the same visual weight in one run of text.
//
// Depth-tracked rather than a single regex: some grammar notations nest
// their own parens ("Or (-거나 vs (이)나)"), which a naive /\(([^)]*)\)$/
// can't match at all — [^)] can't tell an inner ")" from the outer one, so
// the whole pattern silently fails to match.
export function parseTitle(title: string): { main: string; detail: string | null } {
	const trimmed = title.trimEnd();
	if (!trimmed.endsWith(')')) return { main: title, detail: null };

	let depth = 0;
	for (let i = trimmed.length - 1; i >= 0; i--) {
		if (trimmed[i] === ')') depth++;
		else if (trimmed[i] === '(') {
			depth--;
			if (depth === 0) {
				return {
					main: trimmed.slice(0, i).trimEnd(),
					detail: trimmed.slice(i + 1, -1),
				};
			}
		}
	}
	return { main: title, detail: null };
}

// A note belongs to Tangents 여담 if it's tagged CULTURE or GUIDES, or if it
// has no language tag at all — anything that isn't a graded note in a
// language curriculum.
export function isTangent(n: Note): boolean {
	return n.data.category.includes('CULTURE') || n.data.category.includes('GUIDES') ||
		!n.data.category.some(c => ['JAPANESE', 'KOREAN', 'CHINESE'].includes(c));
}

// Group a course's notes by level, in curriculum order (level order, then
// ascending lesson order within each level) — the reading order you'd
// actually work through, not publish order.
export function groupByLevel(sectionNotes: Note[]) {
	return LEVEL_ORDER
		.map(level => ({
			level,
			notes: sectionNotes
				.filter(n => n.data.level === level)
				.sort((a, b) => a.data.order - b.data.order),
		}))
		.filter(g => g.notes.length > 0);
}

// The full front-to-back reading order for a language's course — used for
// Previous/Next navigation on individual note pages, so "next" means the
// next lesson in the curriculum, not the next note by raw creation order.
export function courseSequence(allNotes: Note[], language: 'JAPANESE' | 'KOREAN'): Note[] {
	const courseNotes = allNotes.filter(n => n.data.category.includes(language) && !isTangent(n));
	return groupByLevel(courseNotes).flatMap(g => g.notes);
}
