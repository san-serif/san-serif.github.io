---
title: "Flashcards and the Science of Vocabulary Retention"
order: 1
description: "Why Spaced Repetition Systems (SRS) and active recall are the only ways to beat the memory loss effect."
category: ["LEARN"]
---

Learning a language often feels like trying to fill a bucket with a hole in the bottom. You pour in new words, but by the next morning, most of them have leaked out. In cognitive science, this is known as the Forgetting Curve. 

To plug the leak, you need more than just repetition: you need Spaced Repetition (SRS).

### Spaced Repetition: The Art of Timing
The secret to memory is not how often you review, but when you review. Spaced Repetition is a technique where you review information at increasing intervals. If you learn a word today, you review it tomorrow, then in four days, then two weeks.

By spacing out your reviews, you catch the memory right at the edge of the leak. Each successful review resets the curve, making the memory stronger and the next interval longer. Eventually, the word moves from your short-term bucket into permanent long-term storage.



### Active Recall and the Feedback Loop
For Spaced Repetition to work, it must be paired with Active Recall and honest self-assessment.

<div class="flashcard-reveal" id="dynamic-card">
    <img src="/images/tokei-front.png" id="card-front" alt="Flashcard Front" class="face-img front" />
    <img src="/images/tokei-back.png" id="card-back" alt="Flashcard Back" class="face-img back" />
</div>

The process follows a specific loop. You see a character (the front) and force your brain to retrieve the meaning. You then reveal the answer (the back) to check your accuracy. 

This is the critical moment: you must grade yourself. If you struggle or fail, you tell the system. The SRS algorithm then increases the frequency of that card, forcing it back into your rotation until the neural pathway is strong enough to move to a longer interval. Your self-assessment is the input that tells the system exactly where the "leaks" are in your memory.

### Catching the Leak in the Gaps
The Forgetting Curve is brutal because the brain is designed to delete information it deems useless to save space. To beat it, you have to catch a word right as it is about to vanish. 

This is why the Apple Watch is a primary tool for retention. You do not need a two-hour study session. You just need the 15-second gaps in your day: waiting for an elevator or sitting on a train. By reviewing in micro-bursts, you catch the leak before the word is gone. Consistency in the gaps beats intensity in the classroom.

### Thinking like a Native
The final goal is to stop the mental lag. When you see 운동화 (undong-hwa) on your wrist, you should not think of the English word "sneakers." You should see the object itself. 

Flashcards build that direct visual link, removing the translation step and helping you think like a native speaker. Through Spaced Repetition, vocabulary transforms from a list of definitions into a set of immediate mental images.

---

### SRS Flashcard Tools

* [TokeiTango](/portfolio/tokeitango): JLPT aligned Japanese vocabulary.
* [Eohwi](/portfolio/eohwi): Korean retention based on the TOPIK 6000 core vocabulary.
* [Zungzi](/portfolio/zungzi): Mastery of the Chinese HSK 3.0 curriculum.

<script>
    const urlParams = new URLSearchParams(window.location.search);
    const referral = urlParams.get('ref');

    const front = document.getElementById('card-front');
    const back = document.getElementById('card-back');

    if (referral === 'zungzi') {
        front.src = '/images/zungzi-front.png';
        back.src = '/images/zungzi-back.png';
    } else if (referral === 'eohwi') {
        front.src = '/images/eohwi-front.png';
        back.src = '/images/eohwi-back.png';
    }
</script>

<style>
    a {
        color: inherit;
        text-decoration: underline;
    }

    .flashcard-reveal {
        position: relative;
        width: 280px;
        height: 280px;
        margin: 2rem auto;
        cursor: pointer;
    }
    .face-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transition: opacity 0.2s ease-in-out;
    }
    .back { opacity: 0; }
    .flashcard-reveal:hover .front { opacity: 0; }
    .flashcard-reveal:hover .back { opacity: 1; }
</style>