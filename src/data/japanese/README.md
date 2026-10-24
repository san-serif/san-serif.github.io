# Japanese grammar pattern export

Extracted from `Tsugi/tangoDB.sqlite`, table `BunproGrammar` (SQLite user_version 4). It contains 945 records: N5=132, N4=185, N3=220, N2=221, N1=187.

- `japanese_grammar_patterns.json`: lesson authoring data with provenance metadata.
- `japanese_grammar_patterns.csv`: flat table for spreadsheet review.

Fields: `bunpro_id` (stable row ID), `jlpt_level`, `pattern`, `meaning`, `explanation`, and `source_url`. The stored explanation is a short learner-facing description based on the pattern and meaning; use the lesson's Japanese example to demonstrate it in context. Source links point to Bunpro.
