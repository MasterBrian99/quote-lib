// @ts-nocheck
const fs = require("fs");
const path = require("path");

type QuoteType = {
  id: number;
  text: string;
  author: string;
  category: string[];
};

function transformJsonToTsArray(): void {
  const inputFilePath = path.resolve(__dirname, "quotes.json");
  const outputFilePath = path.resolve(__dirname, "../src/lib/quotes.ts");
  try {
    const data = fs.readFileSync(inputFilePath, "utf-8");

    const quotes: QuoteType[] = JSON.parse(data).map((item, index) => {
      id : index,
      ...item
    });

    const tsContent = `export type QuoteType = {
  id: number;
  text: string;
  author: string;
  category: string[];
};
export const quoteLength=${quotes.length}

const quotes: QuoteType[] = ${JSON.stringify(quotes, null, 2)};

export default quotes;`;

    fs.writeFileSync(outputFilePath, tsContent);

    console.log(
      `Quotes have been transformed and written to ${outputFilePath}`
    );
  } catch (error) {
    console.error("Error processing the JSON file:", error);
  }
}

transformJsonToTsArray();
