# Sejong Korean coverage and editorial review

Reviewed 2026-10-25 against the uploaded student textbooks and all eight **Vocabulary & Grammar Books** (1A–4B).

## Which resource is more useful?

For writing these grammar-led website notes, the vocabulary-and-grammar series is the more useful primary reference. It puts bilingual meanings, focused examples, vocabulary glosses, and grammar-in-use explanations together without the student books’ exercise pages. The student textbooks remain useful for the teaching sequence, the situations in which people use the forms, and dialogue context. Use both: the reference series for focused language checks and word selection; the textbooks for progression and conversational context.

The reference books clarify look-alike forms that a contents table alone can obscure. For example, 4B unit 9 teaches **-(으)나 for contrast**, and unit 12 teaches **-기를 바라다**. These are represented explicitly in the finished notes. This is a source comparison for authoring study notes, not a claim that the compact references replace class activities or listening practice.

## Current course

- **125 Korean lessons:** 75 in the existing TOPIK I navigation band and 50 in TOPIK II.
- All 12 units from 4A and all 12 from 4B now have original lessons, following the 3A/3B sequence.
- A new beginner lesson teaches **-고** at TOPIK I order 32, immediately after the intention lesson. Existing URLs remain unchanged; later beginner order numbers shift by one.
- Earlier lessons now explicitly cover additive **도**, polite **-아요/어요 suggestions**, destination **에** versus action-site **에서**, question words, and the appreciative turn-final **-는데요**.
- Earlier explanations were corrected where they imposed false absolutes: casual requests versus bare stems; 감사해요/죄송해요; ability versus situational possibility; intention versus a booked commitment; third-person desires; topic/subject discourse; irregular stems; and respectful recipients.
- The existing TOPIK labels are broad navigation bands, not claims of complete TOPIK exam preparation.

The notes contain original explanations and examples, rather than copied textbook exercises or dialogues. The map covers the grammar syllabus, not every pronunciation, culture, listening, or writing activity in the student books.

## Vocabulary and specification audit

The first count found **46 of the previous 100 lessons below 20 entries**. Those glossaries were expanded, and the 25 new lessons were brought to the same minimum. Advanced vocabulary was selected against the individual 4A/4B reference units rather than padded with a generic word list.

The final source audit finds **20–38 distinct entries in every lesson, 2,540 entries across 125 lessons**. Every entry includes Korean, romanization, and an English gloss. This counts entries across lesson glossaries, not unique words across the entire course.

The minimum is now explicit in [the Korean lesson specification](../../content/templates/korean-lesson-style-notes.md) and [the shared writing guide](../../content/templates/lesson-writing-style.md). Run `npm run audit:korean`; it also runs automatically before `npm run build`. It checks the minimum, duplicates, missing fields, examples for enabled speech levels, shared components, links, consecutive order, and both source maps. Editorial review is still needed for natural language, vocabulary relevance, and readings.

The audit also caught and repaired two missing casual romanizations in the introductory lesson. Its self-introduction now uses 이름 rather than the self-honorific 성함. The number lesson’s final glossary now has the shared Vocabulary heading.

## Complete reference coverage

[sejong-curriculum-map.json](sejong-curriculum-map.json) maps **188 grammar slots across 94 units** in all eight reference books. Book 1A has 10 units; each remaining book has 12. Each slot has a form, actual lesson slug(s), and reference PDF page number. Both the main grammar and the grammar-in-use/second grammar slot are included.

| Reference book | Units | Grammar slots | Local reference |
| --- | ---: | ---: | --- |
| 1A | 10 | 20 | [Vocabulary & Grammar 1A](<../../content/notes/Vocabulary and Grammar Book 어휘·표현과 문법/세종한국어 어휘·표현과 문법 1A.pdf>) |
| 1B | 12 | 24 | [Vocabulary & Grammar 1B](<../../content/notes/Vocabulary and Grammar Book 어휘·표현과 문법/세종한국어 어휘·표현과 문법 1B.pdf>) |
| 2A | 12 | 24 | [Vocabulary & Grammar 2A](<../../content/notes/Vocabulary and Grammar Book 어휘·표현과 문법/세종한국어 어휘·표현과 문법 2A.pdf>) |
| 2B | 12 | 24 | [Vocabulary & Grammar 2B](<../../content/notes/Vocabulary and Grammar Book 어휘·표현과 문법/세종한국어 어휘·표현과 문법 2B.pdf>) |
| 3A | 12 | 24 | [Vocabulary & Grammar 3A](<../../content/notes/Vocabulary and Grammar Book 어휘·표현과 문법/세종한국어 어휘·표현과 문법 3A.pdf>) |
| 3B | 12 | 24 | [Vocabulary & Grammar 3B](<../../content/notes/Vocabulary and Grammar Book 어휘·표현과 문법/세종한국어 어휘·표현과 문법 3B.pdf>) |
| 4A | 12 | 24 | [Vocabulary & Grammar 4A](<../../content/notes/Vocabulary and Grammar Book 어휘·표현과 문법/세종한국어 어휘·표현과 문법 4A.pdf>) |
| 4B | 12 | 24 | [Vocabulary & Grammar 4B](<../../content/notes/Vocabulary and Grammar Book 어휘·표현과 문법/세종한국어 어휘·표현과 문법 4B.pdf>) |

PDF page numbers count the cover as page 1. Reference and student-textbook page numbers are recorded separately; their offsets differ. The uploaded PDFs are local editorial sources and are not copied to public assets. The automated audit does not require the PDFs to be deployed.

## Expanded lesson crosswalk

[sejong-lesson-map.json](sejong-lesson-map.json) tracks the 63 lessons added during the two textbook-expansion passes. The full curriculum map above also covers the earlier notes. Source pages below are **PDF pages**, not printed page numbers.

| Book | Unit | Student PDF pages | Reference PDF pages | Grammar targets | Lesson | Course position |
| --- | --- | --- | --- | --- | --- | --- |
| 1B | 7 | — | 40, 41 | -고 | [And Another Thing (-고)](../../content/notes/and-another-thing-ko.mdx) | TOPIK I 32 |
| 2A | 11 | 100 | 46, 47 | -(으)ㄴ 적이 있다/없다 | [Have Done Before (-(으)ㄴ 적이 있다)](../../content/notes/have-done-before.mdx) | TOPIK I 62 |
| 2A | 11 | 101 | 46, 47 | 동안; -는 동안 | [For the Whole Time (동안)](../../content/notes/for-the-whole-time.mdx) | TOPIK I 63 |
| 2B | 1 | 20, 21 | 28, 29 | -(으)ㄹ래요?; -(으)ㄹ게요 | [Want To? I’ll Do It (-(으)ㄹ래요)](../../content/notes/want-to-ill-do-it.mdx) | TOPIK I 64 |
| 2B | 2 | 28, 29 | 30, 31 | 에서부터; -(으)ㄹ + noun | [From Here to the Place (에서부터)](../../content/notes/from-here-to-the-place.mdx) | TOPIK I 65 |
| 2B | 3 | 36, 37 | 32, 33 | -(으)시-; 에게만; 에게도 | [Respect and Recipients (-(으)시-)](../../content/notes/respect-and-recipients.mdx) | TOPIK I 66 |
| 2B | 4 | 44, 45 | 34, 35 | -다가; -아/어 주다 | [On the Way, Helping Out (-다가)](../../content/notes/on-the-way-helping-out.mdx) | TOPIK I 67 |
| 2B | 5 | 52, 53 | 36, 37 | -네요; -지 말다 | [Oh, Please Don’t (-네요)](../../content/notes/oh-please-dont.mdx) | TOPIK I 68 |
| 2B | 6 | 60, 61 | 38, 39 | -아/어도 되다; -(으)면 안 되다 | [Is It Allowed? (-아/어도 되다)](../../content/notes/is-it-allowed.mdx) | TOPIK I 69 |
| 2B | 7 | 68, 69 | 40, 41 | 에게서/한테서/께; -(으)니까 (discovery) | [Heard From, Found Out (에게서)](../../content/notes/heard-from-found-out.mdx) | TOPIK I 70 |
| 2B | 8 | 76, 77 | 42, 43 | -는데/-(으)ㄴ데 (contrast); 밖에 | [Used To, Only This (-았는데)](../../content/notes/used-to-only-this.mdx) | TOPIK I 71 |
| 2B | 9 | 84, 85 | 44, 45 | -기 때문에; -는데요/-(으)ㄴ데요 | [Because, You See (-기 때문에)](../../content/notes/because-you-see.mdx) | TOPIK I 72 |
| 2B | 10 | 92, 93 | 46, 47 | -는/-(으)ㄴ 편이다; -게 (purpose/result) | [Rather Adventurous (-는 편이다)](../../content/notes/rather-adventurous.mdx) | TOPIK I 73 |
| 2B | 11 | 100, 101 | 48, 49 | -아/어 (casual); 에는/에서는 | [Then and Now (에는)](../../content/notes/then-and-now-ko.mdx) | TOPIK I 74 |
| 2B | 12 | 108, 109 | 50, 51 | 처럼; -게 되다 | [Like You, I Ended Up (-게 되다)](../../content/notes/like-you-ended-up.mdx) | TOPIK I 75 |
| 3A | 1 | 20, 21 | 26, 27 | -니?; -자; -아/어 보이다 | [You Look Well (-아/어 보이다)](../../content/notes/you-look-well.mdx) | TOPIK II 3 |
| 3A | 2 | 28, 29 | 28, 29 | -는다고/ㄴ다고/다고 하다; -나/-(으)ㄴ가 보다 | [They Say, It Seems (-다고 하다)](../../content/notes/they-say-it-seems.mdx) | TOPIK II 4 |
| 3A | 3 | 36, 37 | 30, 31 | -(으)ㄹ까 하다; -지만 않으면 | [Thinking of It (-까 하다)](../../content/notes/thinking-of-as-long-as.mdx) | TOPIK II 5 |
| 3A | 4 | 44, 45 | 32, 33 | -고 나서; -(으)ㄹ 테니까 | [Finish First, I’ll Handle It (-고 나서)](../../content/notes/finish-first-ill-handle-it.mdx) | TOPIK II 6 |
| 3A | 5 | 52, 53 | 34, 35 | -아/어 보니까; -(으)려면 | [Tried It, Need a Refund (-려면)](../../content/notes/tried-it-to-get-a-refund.mdx) | TOPIK II 7 |
| 3A | 6 | 60, 61 | 36, 37 | -잖아요; -(으)려다가 | [You Know, I Was Going To (-잖아요)](../../content/notes/you-know-i-was-going-to.mdx) | TOPIK II 8 |
| 3A | 7 | 68, 69 | 38, 39 | -(으)ㄴ 지; -자고 하다 | [How Long Since? (-(으)ㄴ 지)](../../content/notes/how-long-since-lets.mdx) | TOPIK II 9 |
| 3A | 8 | 76, 77 | 40, 41 | -기 위해서; -아야겠다/어야겠다 | [In Order To, I’d Better (-기 위해서)](../../content/notes/in-order-to-id-better.mdx) | TOPIK II 10 |
| 3A | 9 | 84, 85 | 42, 43 | -아/어지다; -는/-(으)ㄴ 대신에 | [Getting Better, Instead (-아/어지다)](../../content/notes/getting-better-instead.mdx) | TOPIK II 11 |
| 3A | 10 | 92, 93 | 44, 45 | -도록 하다; -아야/어야 | [Make Sure, Only If (-도록 하다)](../../content/notes/make-sure-only-if.mdx) | TOPIK II 12 |
| 3A | 11 | 100, 101 | 46, 47 | -다 보면; -더라고요 | [Keep at It, I Found (-다 보면)](../../content/notes/keep-at-it-i-found.mdx) | TOPIK II 13 |
| 3A | 12 | 108, 109 | 48, 49 | -는다/ㄴ다/다; -(으)라고 하다 | [Writing and Reporting Instructions (-라고 하다)](../../content/notes/writing-and-reporting-instructions.mdx) | TOPIK II 14 |
| 3B | 1 | 20, 21 | 28, 29 | -아도/어도; -아/어 드리다 | [Even So, I’ll Help (-아/어 드리다)](../../content/notes/even-so-help-respectfully.mdx) | TOPIK II 15 |
| 3B | 2 | 28, 29 | 30, 31 | -(으)ㄹ까 봐; -(으)ㄹ 텐데 | [Worried It Might (-까 봐)](../../content/notes/worried-it-might.mdx) | TOPIK II 16 |
| 3B | 3 | 36, 37 | 32, 33 | -거든요; -는구나/구나 | [You See, Oh I See (-거든요)](../../content/notes/you-see-oh-i-see.mdx) | TOPIK II 17 |
| 3B | 4 | 44, 45 | 34, 35 | -아/어 놓다; -(으)ㄴ 다음에 | [Leave It Ready, Then (-아/어 놓다)](../../content/notes/leave-it-ready-then.mdx) | TOPIK II 18 |
| 3B | 5 | 52, 53 | 36, 37 | -자마자; -아/어 버리다 | [As Soon As, All Gone (-자마자)](../../content/notes/as-soon-as-all-gone.mdx) | TOPIK II 19 |
| 3B | 6 | 60, 61 | 38, 39 | -았었/었었-; -(으)ㄹ걸 그랬다 | [Back Then, Should Have (-걸 그랬다)](../../content/notes/back-then-should-have.mdx) | TOPIK II 20 |
| 3B | 7 | 68, 69 | 40, 41 | -아/어 가지고; -는다거나/ㄴ다거나 | [Because, and Things Like That (-가지고)](../../content/notes/because-and-things-like-that.mdx) | TOPIK II 21 |
| 3B | 8 | 76, 77 | 42, 43 | -느라고; -기는요 | [Busy Doing, Oh Hardly (-느라고)](../../content/notes/busy-doing-oh-hardly.mdx) | TOPIK II 22 |
| 3B | 9 | 84, 85 | 44, 45 | -는/-(으)ㄴ 모양이다; 같이 | [Looks Like, Like a Picture (모양이다)](../../content/notes/looks-like-like-a-picture.mdx) | TOPIK II 23 |
| 3B | 10 | 92, 93 | 46, 47 | -던데요; -았더니/었더니 | [I Noticed, When I Did (-았더니)](../../content/notes/i-noticed-when-i-did.mdx) | TOPIK II 24 |
| 3B | 11 | 100, 101 | 48, 49 | -아/어 가다; -아/어 두다 | [Getting There, Ready for Later (-아/어 두다)](../../content/notes/getting-there-ready-for-later.mdx) | TOPIK II 25 |
| 3B | 12 | 108, 109 | 50, 51 | -기는 하다; -는 중이다 | [True, but I’m Working on It (-기는 하다)](../../content/notes/true-but-working-on-it.mdx) | TOPIK II 26 |
| 4A | 1 | 18, 20 | 22, 23 | -는다면/ㄴ다면/다면; -았으면/었으면 하다 | [If It Were Possible (-다면)](../../content/notes/if-it-were-possible.mdx) | TOPIK II 27 |
| 4A | 2 | 26, 28 | 24, 25 | -(으)ㄹ 만하다; -던데 | [Worth a Visit (-(으)ㄹ 만하다)](../../content/notes/worth-a-visit.mdx) | TOPIK II 28 |
| 4A | 3 | 34, 36 | 26, 27 | -는대요/ㄴ대요/대요; -냬요/-(으)래요/-재요 | [Passing On the News (-대요)](../../content/notes/passing-on-the-news.mdx) | TOPIK II 29 |
| 4A | 4 | 42, 44 | 28, 29 | (으)로 인해서; -(으)면서 (turning point) | [Because of It, As It Happened ((으)로 인해)](../../content/notes/because-of-as-it-happened.mdx) | TOPIK II 30 |
| 4A | 5 | 50, 52 | 30, 31 | -냐면; -기가 쉽다/어렵다/힘들다/편하다 | [If You’re Asking Which (-냐면)](../../content/notes/if-youre-asking-which.mdx) | TOPIK II 31 |
| 4A | 6 | 58, 60 | 32, 33 | -(으)ㄹ 뿐만 아니라; -게 하다 | [Not Only, Makes Me (-게 하다)](../../content/notes/not-only-makes-me.mdx) | TOPIK II 32 |
| 4A | 7 | 66, 68 | 34, 35 | -(으)ㄹ 뻔하다; 아무 N(이)나 | [Almost, Anyone (-(으)ㄹ 뻔하다)](../../content/notes/almost-anyone.mdx) | TOPIK II 33 |
| 4A | 8 | 74, 76 | 36, 37 | -는/-(으)ㄴ/-(으)ㄹ 듯이; passive -이/-히/-리/-기 | [As If It Were Seen (-듯이)](../../content/notes/as-if-it-were-seen.mdx) | TOPIK II 34 |
| 4A | 9 | 82, 84 | 38, 39 | -지 않아요?; 얼마나 -는다고요/ㄴ다고요/다고요 | [Isn’t It So? (-지 않아요?)](../../content/notes/isnt-it-so-how-much.mdx) | TOPIK II 35 |
| 4A | 10 | 90, 92 | 40, 41 | -더니; -는/-(으)ㄴ 것이다 | [I Saw It, the Fact Is (-더니)](../../content/notes/i-saw-it-the-fact-is.mdx) | TOPIK II 36 |
| 4A | 11 | 98, 100 | 42, 43 | (으)로서; 에 대해서 | [As a Person, About a Place ((으)로서)](../../content/notes/as-a-person-about-a-place.mdx) | TOPIK II 37 |
| 4A | 12 | 106, 108 | 44, 45 | -(으)며; -고자 하다 | [And, I Intend ((으)며)](../../content/notes/and-i-intend-formally.mdx) | TOPIK II 38 |
| 4B | 1 | 18, 20 | 22, 23 | -는/-(으)ㄴ 데다가; -든지 | [On Top of That, Any Choice (-데다가)](../../content/notes/on-top-of-that-any-choice.mdx) | TOPIK II 39 |
| 4B | 2 | 26, 28 | 24, 25 | -는/-(으)ㄴ/-(으)ㄹ 줄 알다; -던 | [I Thought It Was (-는 줄 알다)](../../content/notes/thought-it-was-remembered.mdx) | TOPIK II 40 |
| 4B | 3 | 34, 36 | 26, 27 | -(으)ㄹ까 -(으)ㄹ까; -지 그래요? | [This or That, Why Not? (-(으)ㄹ까)](../../content/notes/this-or-that-why-not.mdx) | TOPIK II 41 |
| 4B | 4 | 42, 44 | 28, 29 | -았어야/었어야 했는데; -았을/었을 텐데 | [If Only I Had (-았어야 했는데)](../../content/notes/if-only-i-had.mdx) | TOPIK II 42 |
| 4B | 5 | 50, 52 | 30, 31 | 에 비해서; -아야지/어야지 | [Compared With, I Should (에 비해서)](../../content/notes/compared-with-i-should.mdx) | TOPIK II 43 |
| 4B | 6 | 58, 60 | 32, 33 | -는지/-(으)ㄴ지 알다/모르다; -는다면서요/ㄴ다면서요/다면서요 | [I Wonder Why, You Said (-다면서요?)](../../content/notes/wonder-why-you-said.mdx) | TOPIK II 44 |
| 4B | 7 | 66, 68 | 34, 35 | -는 데에; -다 보니 | [For Doing This, I Found (-는 데에)](../../content/notes/kept-doing-so-i-found.mdx) | TOPIK II 45 |
| 4B | 8 | 74, 76 | 36, 37 | -는다는/ㄴ다는/다는 점에서; -(으)ㄴ 결과 | [In That Respect, As a Result (-점에서)](../../content/notes/in-that-respect-as-a-result.mdx) | TOPIK II 46 |
| 4B | 9 | 82, 84 | 38, 39 | -(으)ㄹ수록; -(으)나 (contrast) | [The More, Although (-(으)ㄹ수록)](../../content/notes/the-more-although.mdx) | TOPIK II 47 |
| 4B | 10 | 90, 92 | 40, 41 | -는다고/ㄴ다고/다고 생각하다; -는/-(으)ㄴ 거 아닐까 하다 | [I Think It Might Be (-거 아닐까 하다)](../../content/notes/i-think-it-might-be.mdx) | TOPIK II 48 |
| 4B | 11 | 98, 100 | 42, 43 | -지 않을까 싶다; -기보다는 | [Perhaps, Rather Than (-기보다는)](../../content/notes/perhaps-rather-than.mdx) | TOPIK II 49 |
| 4B | 12 | 106, 108 | 44, 45 | -는다니/ㄴ다니/다니; -기를 바라다 | [What a Surprise, Best Wishes (-기를 바라다)](../../content/notes/looking-back-feeling-so.mdx) | TOPIK II 50 |

## Validation

- `npm run audit:korean`: all 125 lessons pass; all 188 source grammar slots are mapped.
- `npm run build`: verifies content schema, MDX compilation, and static routes.
- Generated-page checks verify the Korean course includes all 125 notes, the selected speech controls have complete data, vocabulary tables render their entries, and Previous/Next links follow the actual course sequence.
- Browser visual review is unavailable in this session; the notes use the existing shared components and layout.
