export type QuoteType = {
  id: number;
  text: string;
  author: string;
  category: string[];
};
export const quoteLength = 16;

const quotes: QuoteType[] = [
  {
    id: 1,
    text: "If you want to achieve greatness stop asking for permission.",
    author: "Unknown",
    category: ["motivational"],
  },
  {
    id: 2,
    text: "Successful entrepreneurs are givers and not takers of positive energy.",
    author: "Unknown",
    category: ["motivational", "entrepreneur"],
  },
  {
    id: 3,
    text: "Opportunities don't happen, you create them.",
    author: "Chris Grosser",
    category: ["motivational", "entrepreneur"],
  },
  {
    id: 4,
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
    category: ["motivational"],
  },
  {
    id: 5,
    text: "If you can't explain it simply, you don't understand it well enough.",
    author: "Albert Einstein",
    category: ["motivational", "education"],
  },
  {
    id: 6,
    text: "You only fail when you stop trying.",
    author: "Albert Einstein",
    category: ["motivational"],
  },
  {
    id: 7,
    text: "A  winner is a dreamer who never gives up",
    author: "Nelson Mandela",
    category: ["motivational"],
  },
  {
    id: 8,
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    category: ["programming"],
  },
  {
    id: 9,
    text: "In order to be irreplaceable, one must always be different",
    author: "Coco Chanel",
    category: ["programming", "motivational"],
  },
  {
    id: 10,
    text: "I'm not a great programmer; I'm just a good programmer with great habits.",
    author: "Kent Beck",
    category: ["programming"],
  },
  {
    id: 11,
    text: "The more you sweat in peace, the less you bleed in war.",
    author: "Norman Schwarzkopf",
    category: ["motivation", "wisdom"],
  },
  {
    id: 12,
    text: "Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying.",
    author: "Arthur C. Clarke",
    category: ["philosophy", "science fiction", "existentialism"],
  },
  {
    id: 13,
    text: "There is no greater sorrow than to recall in misery the time when we were happy.",
    author: "Dante Alighieri",
    category: ["philosophy", "sadness", "wisdom"],
  },
  {
    id: 14,
    text: "It is easier to build strong children than to repair broken men.",
    author: "Frederick Douglass",
    category: ["education", "motivation", "wisdom"],
  },
  {
    id: 15,
    text: "Fear does not stop death. It stops life.",
    author: "Vi Keeland",
    category: ["philosophy", "motivation", "wisdom"],
  },
  {
    id: 16,
    text: "The most important step a man can take. It's not the first one, is it? It's the next one. Always the next step, Dalinar.",
    author: "Brandon Sanderson",
    category: ["motivation", "wisdom", "literature"],
  },
];

export default quotes;
