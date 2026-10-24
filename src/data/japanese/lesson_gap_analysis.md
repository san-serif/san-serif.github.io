# Japanese lesson coverage review

Reviewed the Japanese-tagged notes against `japanese_grammar_patterns.json` on 2026-10-16. The table contains 945 Bunpro records: N5 132, N4 185, N3 220, N2 221, and N1 187. The site has 185 Japanese-tagged lesson pages. Existing N5 and N4 lessons predate the crosswalk and often teach several patterns together, so a lesson count cannot be subtracted from a table-row count to find gaps.

## Advanced curriculum added

The added N3, N2, and N1 curriculum assigns all 628 source records at those levels to Japanese lessons through `sourceRecords`. The mapping audit found no duplicate or unknown source IDs. Records with related functions are attached to existing notes where their teaching purpose fits—for example, variants of advice, permission, comparison, hearsay, and cause—while distinct grammar jobs have their own lesson. Eight N1 review units group the remaining advanced written forms and show their Bunpro pattern names and meanings alongside sentence examples, hints, and 20 vocabulary entries.

These assignments are a practical curriculum crosswalk, not a claim that every Bunpro entry needs its own lesson. Some entries are conjugation labels, spelling/shape variants, or related uses; the site teaches those in context. `sourceRecords` indicates which source entries informed a note, not that the Bunpro explanation was copied.

## Remaining mapping work

The crosswalk currently tags 32 N5 and 31 N4 records. Many legacy N5/N4 lessons have no `sourceRecords`, even when their explanations likely cover relevant table patterns. Therefore the remaining 100 N5 and 154 N4 rows are *unmapped*, not confirmed untaught. A careful row-by-row audit of N5/N4 against the full lesson text is still needed before adding more lessons. Avoid creating duplicates where an existing page already teaches the same distinction.

## Reference use

The added JapanesePod101 PDF, `bk_inno_002215.pdf`, informed pragmatic checks and distinctions, including sarcastic use of おかげで, explicit blame with せいで, the softening/correction use of わけではない, and the target-versus-contrast distinction for に対して. New examples are written for this course rather than copied from the reference.

## Lesson style

New lessons follow the existing MDX components: Japanese examples with furigana, romaji, and translations; practical usage hints/insights; and 20 vocabulary entries. Related Bunpro rows may share a page when the distinctions can be taught clearly. Existing lessons are extended when that avoids repeating an explanation.
