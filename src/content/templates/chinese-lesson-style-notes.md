# Chinese lesson style notes

These notes record the conventions observed in the Japanese and Korean notes, especially `one-please.mdx`, `the-object-marker.mdx`, `and-then.mdx`, and `i-can-i-cant.mdx`. Treat those published lessons as the source of truth when a convention is unclear.

Follow the shared [San Serif lesson writing style](./lesson-writing-style.md) for voice, pacing, titles, and section variety. This file records Chinese-specific requirements only.

## Titles and headings

- Use the same title case as the JP/KR notes: an English learner-facing title followed by one concise native-language form in parentheses, for example `What You Do, Where You Cross (を)` or `When (-ㄹ 때)`.
- Keep the native-language part short and instructional. Use the one pattern a learner will remember, not a dump of every character or source-record item in the lesson.
- Use English title case for headings. Make headings describe the section's teaching job (`A Different Way to Count`, `Passing Through`), and add a short Chinese form only when it helps identify the pattern (`的: Possession`, `Asking Where (哪儿)`). Avoid headings that repeat the full lesson title or list all the grammar content.

## The opening and explanations

- Start with a direct explanation or a useful contrast, in the same voice as the existing lessons. Do not mention HSK bands, source records, curriculum categories, or that a lesson “brings together” grammar points in reader-facing prose. Keep source IDs in frontmatter only.
- Explain the decision a learner needs to make, then show it in natural examples. Separate distinct uses with thematic headings and interleave explanation, sentence blocks, and Hint / In Real Life callouts as needed.
- Cross-reference another lesson only when it clarifies a real contrast or builds on a form the reader already knows. Use an inline Markdown link to the relevant note in the sentence that needs it, e.g. `[Because](/notes/because)`. Never use generic references to a preceding lesson, an HSK record, or a map entry.
- Do not add cross-references merely to make the page look connected. Check the target slug and explain the relationship in the surrounding sentence.

## Examples and callouts

- Each sentence example must demonstrate the pattern being taught. Prefer several natural, varied examples over unrelated dictionary examples.
- Supply each Chinese example with Simplified, Traditional, Pinyin, Jyutping, and English. Pinyin and Jyutping represent Mandarin and Cantonese readings respectively; check each one against the sentence and do not derive one from the other.
- Use `<Hint type="hint">` for a rule, contrast, exception, or common learner error. Use `<Hint type="insight">` for a specific, useful natural-use observation, labelled “In Real Life” by the shared component. Make both callouts informative and specific to the lesson; do not repeat generic site instructions as filler.

## Vocabulary and page structure

- Put one `CVocabTable` under a `### Vocabulary` heading near the end of the lesson, as in JP/KR notes. Every Chinese lesson has exactly 20 useful, lesson-related entries.
- Each entry includes Simplified, Traditional, Pinyin, Jyutping, and a concise English gloss. Check sense and reading in context; avoid homophones or unrelated HSK words used only to fill the count.
- The shared Chinese table provides the Yinpin dictionary deep link. Keep the entry text as Chinese and let the table follow the active script toggle.
- Import `ChineseLessonHead`, `CSentenceBlock`, `CVocabTable`, and `Hint` from the shared components. Put `<ChineseLessonHead />` near the top. Reuse the existing independent Characters and Pronunciation controls.
- Keep the overall article authored and topical, like JP/KR. The data map is a coverage aid, not a reader-facing outline or prose source.

## Additional teaching notes from the uploaded lesson notes

Use `src/content/notes/bk_inno_002222.pdf` as a reference for lesson pacing, not as copy to reproduce. Its beginner lessons often begin with a brief everyday exchange, then connect the expressions in that exchange to a focused grammar explanation and practical phrase usage.

- Give the learner a concrete moment to picture before naming the rule: asking for directions, making a repeat request, planning a departure, or solving a small everyday problem.
- Let examples build from the basic form to a fuller exchange. A grammar page should not spend most of its example blocks on sentences that do not use the page's target.
- Include an “In Real Life” note only when it adds a reusable phrase, a register distinction, or a grounded cultural detail. Keep the claim narrow and avoid broad claims about what all Chinese speakers do.
- Choose vocabulary that would help the learner understand or continue the scene and the target pattern. A page reaching 20 entries is not sufficient if entries are unrelated filler.

## HSK coverage metadata

Keep `level` and `sourceRecords` in frontmatter for navigation and traceability. HSK 7–9 remains one band because the source does not separate those records. Do not expose these implementation details in the title, headings, examples, or prose.
