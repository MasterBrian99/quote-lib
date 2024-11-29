export type QuoteType = {
  id: number;
  text: string;
  author: string;
  category: string[];
};
export const quoteLength = 46;

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
  {
    id: 17,
    text: "The master has failed more times than the beginner has even tried.",
    author: "Stephen McCranie",
    category: ["perseverance", "growth", "experience"],
  },
  {
    id: 18,
    text: "Beware the fury of a patient man.",
    author: "John Dryden",
    category: ["patience", "warning", "wisdom"],
  },
  {
    id: 19,
    text: "There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.",
    author: "Patrick Rothfuss",
    category: ["wisdom", "fear", "proverbs"],
  },
  {
    id: 20,
    text: "He who fights with monsters should be careful lest he thereby become a monster. And if thou gaze long into an abyss, the abyss will also gaze into thee.",
    author: "Nietzsche",
    category: ["philosophy", "introspection", "morality"],
  },
  {
    id: 21,
    text: "The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.",
    author: "Nietzsche",
    category: ["philosophy", "individuality", "education"],
  },
  {
    id: 22,
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    category: ["programming", "readability", "software engineering"],
  },
  {
    id: 23,
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    category: ["problem-solving", "programming", "logic"],
  },
  {
    id: 24,
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
    category: ["programming", "clean code", "best practices"],
  },
  {
    id: 25,
    text: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
    category: ["programming", "simplicity", "clean code"],
  },
  {
    id: 26,
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
    category: ["efficiency", "programming", "productivity"],
  },
  {
    id: 27,
    text: "In programming, the hard part isn’t solving problems, but deciding what problems to solve.",
    author: "Paul Graham",
    category: ["programming", "problem-solving", "strategy"],
  },
  {
    id: 28,
    text: "Optimism is an occupational hazard of programming: feedback is the treatment.",
    author: "Kent Beck",
    category: ["programming", "feedback", "growth"],
  },
  {
    id: 29,
    text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
    category: ["motivation", "success", "happiness"],
  },
  {
    id: 30,
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: ["motivation", "perseverance", "time management"],
  },
  {
    id: 31,
    text: "Fall seven times, stand up eight.",
    author: "Japanese Proverb",
    category: ["perseverance", "resilience", "motivation"],
  },
  {
    id: 32,
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
    category: ["motivation", "possibility", "perseverance"],
  },
  {
    id: 33,
    text: "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    author: "Edsger Dijkstra",
    category: ["programming", "humor", "debugging"],
  },
  {
    id: 34,
    text: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
    category: ["growth", "learning", "wisdom"],
  },
  {
    id: 35,
    text: "Programming isn’t about what you know; it’s about what you can figure out.",
    author: "Chris Pine",
    category: ["programming", "problem-solving", "learning"],
  },
  {
    id: 36,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: ["motivation", "passion", "success"],
  },
  {
    id: 37,
    text: "Science is a way of thinking much more than it is a body of knowledge.",
    author: "Carl Sagan",
    category: ["science", "philosophy", "knowledge"],
  },
  {
    id: 38,
    text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
    author: "Albert Einstein",
    category: ["science", "curiosity", "philosophy"],
  },
  {
    id: 39,
    text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.",
    author: "Edwin Hubble",
    category: ["science", "exploration", "curiosity"],
  },
  {
    id: 40,
    text: "Somewhere, something incredible is waiting to be known.",
    author: "Carl Sagan",
    category: ["science", "exploration", "inspiration"],
  },
  {
    id: 41,
    text: "Science is the poetry of reality.",
    author: "Richard Dawkins",
    category: ["science", "philosophy", "reality"],
  },
  {
    id: 42,
    text: "The good thing about science is that it's true whether or not you believe in it.",
    author: "Neil deGrasse Tyson",
    category: ["science", "truth", "logic"],
  },
  {
    id: 43,
    text: "If I have seen further it is by standing on the shoulders of giants.",
    author: "Isaac Newton",
    category: ["science", "inspiration", "progress"],
  },
  {
    id: 44,
    text: "What we know is a drop, what we don't know is an ocean.",
    author: "Isaac Newton",
    category: ["science", "knowledge", "mystery"],
  },
  {
    id: 45,
    text: "Science and everyday life cannot and should not be separated.",
    author: "Rosalind Franklin",
    category: ["science", "life", "philosophy"],
  },
  {
    id: 46,
    text: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
    author: "Stephen Hawking",
    category: ["science", "knowledge", "philosophy"],
  },
];

export default quotes;
