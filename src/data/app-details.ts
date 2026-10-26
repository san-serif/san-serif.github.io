// Feature access is specified per item in app-features.ts.
export const appDetails = {
  kaku: {
    purchase: 'freemium', name: 'Kaku', devices: 'iPhone, iPad & Mac', purpose: 'Writing Japanese with a dictionary close at hand.',
  },
  sajeon: {
    purchase: 'freemium', name: 'Sajeon', devices: 'iPhone, iPad & Mac', purpose: 'Find a Korean word, understand its forms, and make it part of your vocabulary.',
  },
  tsugi: {
    purchase: 'freemium', name: 'Tsugi', devices: 'iPhone, iPad & Mac', purpose: 'Learning your next Japanese word in a sentence you can follow.',
  },
  yinpin: {
    purchase: 'freemium', name: 'Yinpin', devices: 'iPhone, iPad & Mac', purpose: 'Recall Chinese words, unpack a sentence, and put your Mandarin into conversation.',
  },
  tokeitango: { name: 'TokeiTango', devices: 'Apple Watch', purpose: 'Learn Japanese through vocabulary, example sentences, conjugations and grammar on Apple Watch.', purchase: 'paid' },
  eohwi: { name: 'Eohwi', devices: 'Apple Watch', purpose: 'Learn Korean vocabulary, speech levels, conjugations and word origins on Apple Watch.', purchase: 'paid' },
  zungzi: { name: 'Zungzi', devices: 'Apple Watch', purpose: 'Study Chinese vocabulary in Mandarin or Cantonese, in simplified or traditional characters.', purchase: 'paid' },
} as const;
export type AppSlug = keyof typeof appDetails;
