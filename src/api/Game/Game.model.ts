export type SingleGameModel = {
  question: string;
  all_words: string[];
  good_words: string[];
};

export type AllWordsModel = {
  id: string;
  value: string;
  checked: boolean;
  isGood: boolean;
}[];
