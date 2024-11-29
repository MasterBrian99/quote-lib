import quotes, { QuoteType } from "./quotes";

export type authorIndexTypes =
  | "Unknown"
  | "Chris Grosser"
  | "Thomas A. Edison"
  | "Albert Einstein"
  | "Nelson Mandela"
  | "Martin Fowler"
  | "Coco Chanel"
  | "Kent Beck"
  | "Norman Schwarzkopf"
  | "Arthur C. Clarke"
  | "Dante Alighieri"
  | "Frederick Douglass"
  | "Vi Keeland"
  | "Brandon Sanderson"
  | "Stephen McCranie"
  | "John Dryden"
  | "Patrick Rothfuss"
  | "Nietzsche"
  | "Harold Abelson"
  | "John Johnson"
  | "Cory House"
  | "Austin Freeman"
  | "Paul Graham"
  | "Albert Schweitzer"
  | "Sam Levenson"
  | "Japanese Proverb"
  | "Edsger Dijkstra"
  | "Oscar Wilde"
  | "Chris Pine"
  | "Steve Jobs"
  | "Carl Sagan"
  | "Edwin Hubble"
  | "Richard Dawkins"
  | "Neil deGrasse Tyson"
  | "Isaac Newton"
  | "Rosalind Franklin"
  | "Stephen Hawking";
export const authorIndex: Record<authorIndexTypes, QuoteType[]> = {
  Unknown: [quotes[0], quotes[1]],
  "Chris Grosser": [quotes[2]],
  "Thomas A. Edison": [quotes[3]],
  "Albert Einstein": [quotes[4], quotes[5], quotes[37]],
  "Nelson Mandela": [quotes[6], quotes[31]],
  "Martin Fowler": [quotes[7], quotes[23]],
  "Coco Chanel": [quotes[8]],
  "Kent Beck": [quotes[9], quotes[27]],
  "Norman Schwarzkopf": [quotes[10]],
  "Arthur C. Clarke": [quotes[11]],
  "Dante Alighieri": [quotes[12]],
  "Frederick Douglass": [quotes[13]],
  "Vi Keeland": [quotes[14]],
  "Brandon Sanderson": [quotes[15]],
  "Stephen McCranie": [quotes[16]],
  "John Dryden": [quotes[17]],
  "Patrick Rothfuss": [quotes[18]],
  Nietzsche: [quotes[19], quotes[20]],
  "Harold Abelson": [quotes[21]],
  "John Johnson": [quotes[22]],
  "Cory House": [quotes[24]],
  "Austin Freeman": [quotes[25]],
  "Paul Graham": [quotes[26]],
  "Albert Schweitzer": [quotes[28]],
  "Sam Levenson": [quotes[29]],
  "Japanese Proverb": [quotes[30]],
  "Edsger Dijkstra": [quotes[32]],
  "Oscar Wilde": [quotes[33]],
  "Chris Pine": [quotes[34]],
  "Steve Jobs": [quotes[35]],
  "Carl Sagan": [quotes[36], quotes[39]],
  "Edwin Hubble": [quotes[38]],
  "Richard Dawkins": [quotes[40]],
  "Neil deGrasse Tyson": [quotes[41]],
  "Isaac Newton": [quotes[42], quotes[43]],
  "Rosalind Franklin": [quotes[44]],
  "Stephen Hawking": [quotes[45]],
};

export type categoryIndexTypes =
  | "motivational"
  | "entrepreneur"
  | "education"
  | "programming"
  | "motivation"
  | "wisdom"
  | "philosophy"
  | "science fiction"
  | "existentialism"
  | "sadness"
  | "literature"
  | "perseverance"
  | "growth"
  | "experience"
  | "patience"
  | "warning"
  | "fear"
  | "proverbs"
  | "introspection"
  | "morality"
  | "individuality"
  | "readability"
  | "software engineering"
  | "problem-solving"
  | "logic"
  | "clean code"
  | "best practices"
  | "simplicity"
  | "efficiency"
  | "productivity"
  | "strategy"
  | "feedback"
  | "success"
  | "happiness"
  | "time management"
  | "resilience"
  | "possibility"
  | "humor"
  | "debugging"
  | "learning"
  | "passion"
  | "science"
  | "knowledge"
  | "curiosity"
  | "exploration"
  | "inspiration"
  | "reality"
  | "truth"
  | "progress"
  | "mystery"
  | "life";
export const categoryIndex: Record<categoryIndexTypes, QuoteType[]> = {
  motivational: [
    quotes[0],
    quotes[1],
    quotes[2],
    quotes[3],
    quotes[4],
    quotes[5],
    quotes[6],
    quotes[8],
  ],
  entrepreneur: [quotes[1], quotes[2]],
  education: [quotes[4], quotes[13], quotes[20]],
  programming: [
    quotes[7],
    quotes[8],
    quotes[9],
    quotes[21],
    quotes[22],
    quotes[23],
    quotes[24],
    quotes[25],
    quotes[26],
    quotes[27],
    quotes[32],
    quotes[34],
  ],
  motivation: [
    quotes[10],
    quotes[13],
    quotes[14],
    quotes[15],
    quotes[28],
    quotes[29],
    quotes[30],
    quotes[31],
    quotes[35],
  ],
  wisdom: [
    quotes[10],
    quotes[12],
    quotes[13],
    quotes[14],
    quotes[15],
    quotes[17],
    quotes[18],
    quotes[33],
  ],
  philosophy: [
    quotes[11],
    quotes[12],
    quotes[14],
    quotes[19],
    quotes[20],
    quotes[36],
    quotes[37],
    quotes[40],
    quotes[44],
    quotes[45],
  ],
  "science fiction": [quotes[11]],
  existentialism: [quotes[11]],
  sadness: [quotes[12]],
  literature: [quotes[15]],
  perseverance: [quotes[16], quotes[29], quotes[30], quotes[31]],
  growth: [quotes[16], quotes[27], quotes[33]],
  experience: [quotes[16]],
  patience: [quotes[17]],
  warning: [quotes[17]],
  fear: [quotes[18]],
  proverbs: [quotes[18]],
  introspection: [quotes[19]],
  morality: [quotes[19]],
  individuality: [quotes[20]],
  readability: [quotes[21]],
  "software engineering": [quotes[21]],
  "problem-solving": [quotes[22], quotes[26], quotes[34]],
  logic: [quotes[22], quotes[41]],
  "clean code": [quotes[23], quotes[24]],
  "best practices": [quotes[23]],
  simplicity: [quotes[24]],
  efficiency: [quotes[25]],
  productivity: [quotes[25]],
  strategy: [quotes[26]],
  feedback: [quotes[27]],
  success: [quotes[28], quotes[35]],
  happiness: [quotes[28]],
  "time management": [quotes[29]],
  resilience: [quotes[30]],
  possibility: [quotes[31]],
  humor: [quotes[32]],
  debugging: [quotes[32]],
  learning: [quotes[33], quotes[34]],
  passion: [quotes[35]],
  science: [
    quotes[36],
    quotes[37],
    quotes[38],
    quotes[39],
    quotes[40],
    quotes[41],
    quotes[42],
    quotes[43],
    quotes[44],
    quotes[45],
  ],
  knowledge: [quotes[36], quotes[43], quotes[45]],
  curiosity: [quotes[37], quotes[38]],
  exploration: [quotes[38], quotes[39]],
  inspiration: [quotes[39], quotes[42]],
  reality: [quotes[40]],
  truth: [quotes[41]],
  progress: [quotes[42]],
  mystery: [quotes[43]],
  life: [quotes[44]],
};
