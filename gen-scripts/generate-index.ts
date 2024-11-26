// @ts-nocheck

const fs = require("fs");
const path = require("path");

type QuoteType = {
  id: number;
  text: string;
  author: string;
  category: string[];
};

const inputFilePath = path.resolve(__dirname, "quotes.json");
const outputFilePath = path.resolve(__dirname, "../src/lib/indexes.ts");

function generateIndexes(): void {
  try {
    const data = fs.readFileSync(inputFilePath, "utf-8");
    const quotes: QuoteType[] = JSON.parse(data);

    const authorIndex: Record<string, string[]> = {};
    const categoryIndex: Record<string, string[]> = {};

    quotes.forEach((quote, index) => {
      if (!authorIndex[quote.author]) {
        authorIndex[quote.author] = [];
      }
      authorIndex[quote.author].push(`quotes[${index}]`);
    });

    quotes.forEach((quote, index) => {
      quote.category.forEach((cat) => {
        if (!categoryIndex[cat]) {
          categoryIndex[cat] = [];
        }
        categoryIndex[cat].push(`quotes[${index}]`);
      });
    });

    const generateUnionType = (keys: string[]): string =>
      keys.map((key) => `"${key}"`).join(" | ");

    const authorTypes = generateUnionType(Object.keys(authorIndex));
    const categoryTypes = generateUnionType(Object.keys(categoryIndex));

    const generateIndexString = (index: Record<string, string[]>): string =>
      Object.entries(index)
        .map(([key, refs]) => `"${key}": [${refs.join(", ")}]`)
        .join(",\n  ");

    const tsContent = `import quotes, { QuoteType } from "./quotes";

export type authorIndexTypes = ${authorTypes};
export const authorIndex: Record<authorIndexTypes, QuoteType[]> = {
  ${generateIndexString(authorIndex)}
};

export type categoryIndexTypes = ${categoryTypes};
export const categoryIndex: Record<categoryIndexTypes, QuoteType[]> = {
  ${generateIndexString(categoryIndex)}
};`;

    fs.writeFileSync(outputFilePath, tsContent);

    console.log(
      `Indexes and types have been generated and written to ${outputFilePath}`
    );
  } catch (error) {
    console.error("Error generating indexes:", error);
  }
}

generateIndexes();
