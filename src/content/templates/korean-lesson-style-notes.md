# Korean lesson specification

Follow [the shared writing guide](lesson-writing-style.md) for voice, titles, pacing, and explanations. These requirements also apply when extending or revising existing Korean lessons.

- Include **at least 20 distinct, useful vocabulary entries in every lesson**. Each needs Korean, romanization, and a concise English gloss. Select words that help the reader understand or continue the lesson’s actual scenes. Repeated headwords, unrelated filler, and inflected copies of the same item do not satisfy the requirement.
- Put the main glossary under `### Vocabulary` near the end. Smaller teaching tables may appear earlier when they explain a system such as numbers or demonstratives.
- Use `KoreanLessonHead`, `SentenceBlock`, `VocabTable`, and `Hint`. Retain reading, speech-level, dictionary, and speech controls.
- Provide several original, natural sentence examples. Give every example an English translation and a romanization for each speech level enabled on that page. Four examples are a useful default when teaching two related forms; add more when a distinct use needs one.
- Keep conversational constructions in their natural registers. When converting an ending would remove the target form, restrict the page’s controls to the registers actually supplied. Explain a plain written form when it is compared through the casual control.
- Teach the actual meaning, attachment rule, and a useful limitation or contrast. Separate a tendency from an absolute rule. Respect for a subject, respect for a beneficiary, and politeness toward the listener are separate choices.
- Use the uploaded vocabulary-and-grammar series for focused meanings, lexical senses, and usage comparisons. Use the student textbooks for sequence, scenes, and dialogue context. Write original explanations and examples; do not reproduce textbook exercises or dialogues.
- Keep source coverage in `src/data/korean`, including reference PDF page numbers. Preserve lesson URLs when revising content. Course order must be consecutive within each existing navigation level.

Before delivery, read the lesson in order, check vocabulary relevance and readings, and run `npm run audit:korean` followed by `npm run build`. The structural audit enforces vocabulary counts, complete example fields for enabled speech levels, working lesson links, course order, and source-map consistency. It does not replace a language and editorial review. The audit also runs automatically before builds.
