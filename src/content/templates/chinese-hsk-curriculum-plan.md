# Chinese HSK 3.0 grammar curriculum plan

## Source audit

The source files are `src/data/chinese/hsk_grammar_patterns.csv` and `src/data/chinese/hsk_grammar_patterns.json`. Both contain 573 rows with the same 573 source record IDs. The JSON metadata notes that the published standard reports 572 aggregate points, while the preserved official query has 573 records because Level 2 contains one additional query record. Keep all 573 records and retain their source IDs in lesson metadata.

The source levels contain:

| Source band | Records | First-pass mapped lessons |
| --- | ---: | ---: |
| HSK 1 / 一级 | 48 | 25 |
| HSK 2 / 二级 | 82 | 45 |
| HSK 3 / 三级 | 81 | 46 |
| HSK 4 / 四级 | 76 | 41 |
| HSK 5 / 五级 | 71 | 39 |
| HSK 6 / 六级 | 67 | 36 |
| HSK 7–9 / 高等 | 148 | 62 |
| **Total** | **573** | **294** |

The official query labels the last band only as 高等. It does not assign individual records to HSK 7, 8, or 9. Present these lessons under a single HSK 7–9 heading and do not invent finer level labels.

## Grouping rules

- Keep every lesson within its source band. Revisit earlier structures for contrast, but do not move a source record to another HSK band.
- Group records by what a learner needs to do: build a phrase, mark time/aspect, ask a question, express a relation, or connect clauses. Use the official category and detail fields as an audit trail, not as the lesson titles.
- Keep commonly confused structures together when comparison improves understanding (for example, aspect markers or complement types). Keep structures apart when combining them would blur meaning or syntax.
- Keep first-pass lesson groups to no more than three source records, and split a record when its content contains multiple independent patterns. Combine small records only when they teach a clear shared distinction.
- Preserve each record's `source_record`, `source_level`, `grammar_item`, `category`, `detail`, and `grammar_content` in a coverage manifest. Do not treat a comma- or semicolon-separated list inside one record as additional source records.
- The source is a Mandarin curriculum. Draft Mandarin readings first. Jyutping is a Cantonese reading, not a conversion of Pinyin; only show the Jyutping toggle on lessons that have been deliberately adapted and checked for Cantonese. Do not fill Jyutping mechanically or leave a live control that shows empty readings.

## First-pass lesson map

The initial 53-lesson estimate was too compressed: it averaged almost 11 official records per lesson. A first-pass mapping now assigns every source record to a topic-grouped lesson, with no lesson holding more than three official records. It yields **294 proposed lessons**. For comparison, the site already has 114 Japanese lessons tagged N5 or N4, before most of the intermediate and advanced Japanese curriculum is covered. This map makes Chinese a substantially larger series, as the source volume warrants.

| Source band | Records | Mapped lessons | Main teaching strands |
| --- | ---: | ---: | --- |
| HSK 1 / 一级 | 48 | 25 | Word classes; sentence roles and patterns; questions; negation, time, and aspect |
| HSK 2 / 二级 | 82 | 45 | Word classes and phrases; prepositions; complements; marked sentence patterns; clause links and spoken formats |
| HSK 3 / 三级 | 81 | 46 | Word formation; verbs and measure words; complements; marked constructions; clause relations and emphasis |
| HSK 4 / 四级 | 76 | 41 | Relational phrases; marked constructions; clause relations; emphasis and conversational formats |
| HSK 5 / 五级 | 71 | 39 | Word choice; complement contrasts; marked constructions; multi-clause relations; fixed and spoken expressions |
| HSK 6 / 六级 | 67 | 36 | Word formation; phrase patterns; advanced word classes; clause links; conversational formats |
| HSK 7–9 / 高等 | 148 | 62 | Advanced adverbs; collocations and idioms; clause relations; spoken and discourse-level patterns |
| **Total** | **573** | **294** | |

The lesson-by-lesson mapping is in `src/data/chinese/hsk_grammar_lesson_map.csv`. Each row preserves its official source ID and source fields. Lesson IDs are sequenced by the earliest source record in each topic group, and all groups stay within their source band. The CSV is the working editorial map, not a claim that every title is final.

This 294 count is still a conservative first pass: the map groups up to three records when they share a teaching topic but does not split a single record's `grammar_content` into smaller lessons. During drafting, split a record when it bundles independent patterns that need separate explanations; keep the same source ID with a subtopic suffix so the coverage audit remains exact. Also merge only when the examples show a clear learner-facing contrast and the combined lesson remains teachable.

### Grouping guidance by teaching strand

- HSK 1 should introduce one sentence-building decision at a time: reference words, number/classifier phrases, predicate types, question formation, then time/aspect and negation. Avoid sweeping every word class into a single “vocabulary” lesson.
- HSK 2–3 should split the official word-class catalog into usable functions (time, degree, scope, stance; direction, object, cause, basis), and treat result, direction, quantity, degree, and possibility complements as distinct lessons with comparison where useful.
- HSK 4–6 should give clause relations their own space. Parallel/additive, sequence, cause/result, condition/hypothesis, concession, purpose, and compact clauses should not be crammed into one connective survey.
- HSK 7–9 should use paired lessons to contrast near-synonyms and usage constraints, and separate collocation/idiom lessons from sentence-linking lessons. Reserve synthesis lessons for combinations that occur naturally in longer discourse.
- Split an official record across lessons only when its `grammar_content` clearly contains distinct patterns; repeat its source ID with a subtopic marker in the manifest so coverage remains auditable.

## Drafting and coverage workflow

Each lesson should have a short learning objective, explanations that distinguish similar forms, several natural Mandarin examples, common learner errors, and a compact practice section with answers. Include simplified characters and Pinyin as the default authoring path. Traditional characters should be reviewed for usage and regional vocabulary; do not assume every Traditional form is a mechanical character conversion. Keep the interface's script choice independent from the spoken variety. Add Cantonese/Jyutping as a reviewed adaptation track, not as an automatic second reading for every Mandarin example.

Before publishing, check that all source IDs 1–573 appear exactly once in the primary lesson coverage manifest, and that every lesson's examples and explanations have received language review. Source record coverage does not itself mean that every listed word or pattern needs its own standalone explanation; lists within a record may be taught through representative examples.
