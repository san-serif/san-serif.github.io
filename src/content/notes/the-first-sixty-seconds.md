---
title: "The First Sixty Seconds"
order: 2
description: "In Korea, social interactions start with a quick exchange to figure out how to address one another."
category: ["LEARNING", "KOREAN"]
---

<div class="app-header-controls">
  <div class="toggle-container">
    <span class="toggle-label">a</span>
    <button class="toggle-switch" id="rom-toggle" onclick="toggleRom()">
      <div class="switch-handle"></div>
    </button>
  </div>

  <div class="segmented-control" id="level-picker">
    <button class="segment" onclick="setLevel('formal')" title="Formal">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v15a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6l-3-4H6z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
    </button>
    <button class="segment active" onclick="setLevel('polite')" title="Polite">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path></svg>
    </button>
    <button class="segment" onclick="setLevel('casual')" title="Casual">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
    </button>
  </div>
</div>

In Seoul, "What do you do?" isn't just small talk. It’s a way to figure out how much respect you owe the person in front of you. 

### Essential Greetings

<div class="sentence-block dynamic-text" data-formal="안녕하십니까?" data-formal-rom="annyeonghasimnikka?" data-polite="안녕하세요?" data-polite-rom="annyeonghaseyo?" data-casual="안녕?" data-casual-rom="annyeong?">
  <div class="kr-row"><a href="javascript:void(0)" class="reader-link" onclick="openSajeonReader(this)">안녕하세요?</a><button class="tts-btn" onclick="speakActive(this)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div>
  <div class="rom">annyeonghaseyo?</div>
  <div class="en-row">Hello / How are you?</div>
</div>

<div class="sentence-block dynamic-text" data-formal="만나서 반갑습니다" data-formal-rom="mannaseo bangapseumnida" data-polite="만나서 반가워요" data-polite-rom="mannaseo bangawoyo" data-casual="만나서 반가워" data-casual-rom="mannaseo bangawo">
  <div class="kr-row"><a href="javascript:void(0)" class="reader-link" onclick="openSajeonReader(this)">만나서 반가워요</a><button class="tts-btn" onclick="speakActive(this)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div>
  <div class="rom">mannaseo bangawoyo</div>
  <div class="en-row">Nice to meet you.</div>
</div>

<div class="sentence-block dynamic-text" data-formal="안녕히 가십시오" data-formal-rom="annyeonghi gasipsio" data-polite="안녕히 가세요" data-polite-rom="annyeonghi gaseyo" data-casual="잘 가" data-casual-rom="jal ga">
  <div class="kr-row"><a href="javascript:void(0)" class="reader-link" onclick="openSajeonReader(this)">안녕히 가세요</a><button class="tts-btn" onclick="speakActive(this)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div>
  <div class="rom">annyeonghi gaseyo</div>
  <div class="en-row">Goodbye (to someone leaving).</div>
</div>

<div class="sentence-block dynamic-text" data-formal="안녕히 계십시오" data-formal-rom="annyeonghi gyesipsio" data-polite="안녕히 계세요" data-polite-rom="annyeonghi gyeseyo" data-casual="잘 있어" data-casual-rom="jal isseo">
  <div class="kr-row"><a href="javascript:void(0)" class="reader-link" onclick="openSajeonReader(this)">안녕히 계세요</a><button class="tts-btn" onclick="speakActive(this)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div>
  <div class="rom">annyeonghi gyeseyo</div>
  <div class="en-row">Goodbye (to someone staying).</div>
</div>

### How to Introduce Yourself
Introductions typically follow the pattern: (**저는 [Noun]이에요 / 예요.**)

The ending of the "to be" verb changes based on whether a word ends in a consonant (**Batchim**).

* Use **이에요** for consonants (e.g., 사람 + 이에요 → **사람이에요**).
* Use **예요** for vowels (e.g., 뭐 + 예요 → **뭐예요**).

<div class="sentence-block dynamic-text" data-formal="성함이 어떻게 되십니까?" data-formal-rom="seonghami eotteoke doesimnikka?" data-polite="이름이 뭐예요?" data-polite-rom="ireumi mwoyeyo?" data-casual="이름이 뭐야?" data-casual-rom="ireumi mwoya?">
  <div class="kr-row"><a href="javascript:void(0)" class="reader-link" onclick="openSajeonReader(this)">이름이 뭐예요?</a><button class="tts-btn" onclick="speakActive(this)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div>
  <div class="rom">ireumi mwoyeyo?</div>
  <div class="en-row">What is your name?</div>
</div>

<div class="sentence-block dynamic-text" data-formal="직업이 무엇입니까?" data-formal-rom="jigeobi mueosimnikka?" data-polite="직업이 뭐예요?" data-polite-rom="jigeobi mwoyeyo?" data-casual="직업이 뭐야?" data-casual-rom="jigeobi mwoya?">
  <div class="kr-row"><a href="javascript:void(0)" class="reader-link" onclick="openSajeonReader(this)">직업이 뭐예요?</a><button class="tts-btn" onclick="speakActive(this)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div>
  <div class="rom">jigeobi mwoyeyo?</div>
  <div class="en-row">What is your job?</div>
</div>

<div class="sentence-block dynamic-text" data-formal="어느 나라 사람입니까?" data-formal-rom="eoneu nara saramimnikka?" data-polite="어느 나라 사람이에요?" data-polite-rom="eoneu nara saramieyo?" data-casual="어느 나라 사람이야?" data-casual-rom="eoneu nara saramiya?">
  <div class="kr-row"><a href="javascript:void(0)" class="reader-link" onclick="openSajeonReader(this)">어느 나라 사람이에요?</a><button class="tts-btn" onclick="speakActive(this)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div>
  <div class="rom">eoneu nara saramieyo?</div>
  <div class="en-row">Where are you from?</div>
</div>

### Real World Examples

<div class="sentence-block dynamic-text" data-formal="저는 김민수입니다. 학생입니다." data-formal-rom="jeoneun gimminsuimnida. haksaengimnida." data-polite="저는 민수예요. 학생이에요." data-polite-rom="jeoneun minsuyeyo. haksaengieyo." data-casual="나 민수야. 학생이야." data-casual-rom="na minsuya. haksaeng-iya.">
  <div class="kr-row"><a href="javascript:void(0)" class="reader-link" onclick="openSajeonReader(this)">저는 민수예요. 학생이에요.</a><button class="tts-btn" onclick="speakActive(this)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div>
  <div class="rom">jeoneun minsuyeyo. haksaengieyo.</div>
  <div class="en-row">I am Minsu. I am a student.</div>
</div>

<div class="sentence-block dynamic-text" data-formal="제 성함은 박지혜입니다. 한국 사람입니다." data-formal-rom="je seonghameun bakjihyeimnida. hanguk saramimnida." data-polite="제 이름은 지혜예요. 한국 사람이에요." data-polite-rom="je ireumeun jihyeyeyo. hanguk saramieyo." data-casual="내 이름은 지혜야. 한국 사람이야." data-casual-rom="nae ireumeun jihyeya. hanguk saramiya.">
  <div class="kr-row"><a href="javascript:void(0)" class="reader-link" onclick="openSajeonReader(this)">제 이름은 지혜예요. 한국 사람이에요.</a><button class="tts-btn" onclick="speakActive(this)"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div>
  <div class="rom">je ireumeun jihyeyeyo. hanguk saramieyo.</div>
  <div class="en-row">My name is Jihye. I am Korean.</div>
</div>

### Vocabulary

| Korean | English |
| :--- | :--- |
| <div class="kr-row"><a href="sajeon://search?q=선생님" class="vocab-link">선생님</a><button class="tts-btn" onclick="speak('선생님')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div><div class="rom">seonsaengnim</div> | teacher |
| <div class="kr-row"><a href="sajeon://search?q=의사" class="vocab-link">의사</a><button class="tts-btn" onclick="speak('의사')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div><div class="rom">uisa</div> | doctor |
| <div class="kr-row"><a href="sajeon://search?q=회사원" class="vocab-link">회사원</a><button class="tts-btn" onclick="speak('회사원')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div><div class="rom">hoesawon</div> | office worker |
| <div class="kr-row"><a href="sajeon://search?q=학생" class="vocab-link">학생</a><button class="tts-btn" onclick="speak('학생')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div><div class="rom">haksaeng</div> | student |
| <div class="kr-row"><a href="sajeon://search?q=요리사" class="vocab-link">요리사</a><button class="tts-btn" onclick="speak('요리사')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div><div class="rom">yorisa</div> | chef / cook |
| <div class="kr-row"><a href="sajeon://search?q=회사" class="vocab-link">회사</a><button class="tts-btn" onclick="speak('회사')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div><div class="rom">hoesa</div> | company / office |
| <div class="kr-row"><a href="sajeon://search?q=호주" class="vocab-link">호주</a><button class="tts-btn" onclick="speak('호주')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div><div class="rom">hoju</div> | Australia |
| <div class="kr-row"><a href="sajeon://search?q=한국" class="vocab-link">한국</a><button class="tts-btn" onclick="speak('한국')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div><div class="rom">hanguk</div> | Korea |
| <div class="kr-row"><a href="sajeon://search?q=일본" class="vocab-link">일본</a><button class="tts-btn" onclick="speak('일본')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div><div class="rom">ilbon</div> | Japan |
| <div class="kr-row"><a href="sajeon://search?q=미국" class="vocab-link">미국</a><button class="tts-btn" onclick="speak('미국')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div><div class="rom">miguk</div> | USA |
| <div class="kr-row"><a href="sajeon://search?q=중국" class="vocab-link">중국</a><button class="tts-btn" onclick="speak('중국')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button></div><div class="rom">jungguk</div> | China |

<iframe id="link-handler" style="display:none;"></iframe>

<script>
  let synth = window.speechSynthesis;

  function setLevel(level) {
    document.querySelectorAll('#level-picker .segment').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    const isRomActive = document.getElementById('rom-toggle').classList.contains('active');
    
    document.querySelectorAll('.dynamic-text').forEach(el => {
      const newText = el.getAttribute(`data-${level}`);
      const newRom = el.getAttribute(`data-${level}-rom`);
      el.querySelector('.reader-link').innerText = newText;
      
      const romEl = el.querySelector('.rom');
      romEl.innerText = newRom;
      romEl.style.display = isRomActive ? 'block' : 'none';
    });
  }

  function openSajeonReader(linkEl) {
    const text = linkEl.innerText;
    navigator.clipboard.writeText(text).then(() => {
      const url = `sajeon://reader?text=${encodeURIComponent(text)}&t=${new Date().getTime()}`;
      document.getElementById('link-handler').src = url;
    });
  }

  function speakActive(btn) {
    const text = btn.closest('.dynamic-text').querySelector('.reader-link').innerText;
    speak(text);
  }

  function toggleRom() {
    const btn = document.getElementById('rom-toggle');
    const roms = document.querySelectorAll('.rom');
    btn.classList.toggle('active');
    roms.forEach(r => r.style.display = btn.classList.contains('active') ? 'block' : 'none');
  }

  function speak(text) {
    synth.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ko-KR';
    utter.rate = 0.85;
    synth.speak(utter);
  }
</script>

<style>
  .app-header-controls { display: flex; align-items: center; gap: 16px; margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #eee; }
  .segmented-control { display: flex; background: #f0f0f0; border-radius: 8px; padding: 2px; }
  .segment { border: none; background: none; padding: 6px 10px; border-radius: 6px; cursor: pointer; color: #888; transition: 0.2s; display: flex; align-items: center; }
  .segment.active { background: white; color: #000; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }

  .toggle-container { display: flex; align-items: center; gap: 8px; }
  .toggle-label { font-family: "Charter", serif; font-size: 1.4rem; color: #333; }
  .toggle-switch { width: 34px; height: 18px; background: #ddd; border-radius: 18px; border: none; position: relative; cursor: pointer; }
  .toggle-switch.active { background: #000; }
  .switch-handle { width: 14px; height: 14px; background: #fff; border-radius: 50%; position: absolute; top: 2px; left: 2px; transition: 0.2s; }
  .toggle-switch.active .switch-handle { transform: translateX(16px); }

  .sentence-block { margin-bottom: 2rem; }
  .kr-row { display: inline-flex; align-items: center; gap: 8px; }
  .rom { display: none; font-size: 0.9rem; color: #999; margin: 4px 0; font-family: ui-monospace, monospace; }
  .en-row { font-size: 1rem; color: #555; margin-top: 2px; }
  
  .tts-btn { background: none; border: none; cursor: pointer; color: #ccc; padding: 0; display: inline-flex; transition: color 0.2s; }
  .tts-btn:hover { color: #000; }
  .reader-link { color: inherit !important; text-decoration: none !important; font-size: 1.25rem; font-weight: 400; }

  table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
  td { padding: 12px 4px; border-bottom: 1px solid #f5f5f5; vertical-align: middle; }
  .vocab-link { text-decoration: none; color: inherit; font-size: 1.15rem; }
</style>