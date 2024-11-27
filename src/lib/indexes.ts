import quotes, { QuoteType } from "./quotes";

export type authorIndexTypes =
  | "Unknown"
  | "Chris Grosser"
  | "Thomas A. Edison"
  | "Albert Einstein"
  | "Nelson Mandela"
  | "Martin Fowler"
  | "Coco Chanel"
  | "Kent Beck";
export const authorIndex: Record<authorIndexTypes, QuoteType[]> = {
  Unknown: [quotes[0], quotes[1]],
  "Chris Grosser": [quotes[2]],
  "Thomas A. Edison": [quotes[3]],
  "Albert Einstein": [quotes[4], quotes[5]],
  "Nelson Mandela": [quotes[6]],
  "Martin Fowler": [quotes[7]],
  "Coco Chanel": [quotes[8]],
  "Kent Beck": [quotes[9]],
};

export type categoryIndexTypes =
  | "motivational"
  | "entrepreneur"
  | "education"
  | "programming";
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
  education: [quotes[4]],
  programming: [quotes[7], quotes[8], quotes[9]],
};
