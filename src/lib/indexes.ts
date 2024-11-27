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
  | "Brandon Sanderson";
export const authorIndex: Record<authorIndexTypes, QuoteType[]> = {
  Unknown: [quotes[0], quotes[1]],
  "Chris Grosser": [quotes[2]],
  "Thomas A. Edison": [quotes[3]],
  "Albert Einstein": [quotes[4], quotes[5]],
  "Nelson Mandela": [quotes[6]],
  "Martin Fowler": [quotes[7]],
  "Coco Chanel": [quotes[8]],
  "Kent Beck": [quotes[9]],
  "Norman Schwarzkopf": [quotes[10]],
  "Arthur C. Clarke": [quotes[11]],
  "Dante Alighieri": [quotes[12]],
  "Frederick Douglass": [quotes[13]],
  "Vi Keeland": [quotes[14]],
  "Brandon Sanderson": [quotes[15]],
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
  | "literature";
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
  education: [quotes[4], quotes[13]],
  programming: [quotes[7], quotes[8], quotes[9]],
  motivation: [quotes[10], quotes[13], quotes[14], quotes[15]],
  wisdom: [quotes[10], quotes[12], quotes[13], quotes[14], quotes[15]],
  philosophy: [quotes[11], quotes[12], quotes[14]],
  "science fiction": [quotes[11]],
  existentialism: [quotes[11]],
  sadness: [quotes[12]],
  literature: [quotes[15]],
};
