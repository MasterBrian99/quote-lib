import {
  authorIndex,
  authorIndexTypes,
  categoryIndex,
  categoryIndexTypes,
} from "./indexes";
import quotes, { quoteLength, QuoteType } from "./quotes";

function getRandomQuote(): QuoteType {
  const item = quotes[Math.floor(Math.random() * quoteLength)];
  return item;
}
function getQuoteByID(id: number): QuoteType | null {
  if (quoteLength <= id) {
    return null;
  }
  return quotes[id];
}
function getQuoteByCategory(category: categoryIndexTypes): QuoteType | null {
  const record = categoryIndex[category];
  const item = record[Math.floor(Math.random() * record.length)];
  if (!item) {
    return null;
  }
  return item;
}
function getQuoteByAuthor(author: authorIndexTypes): QuoteType | null {
  const record = authorIndex[author];
  const item = record[Math.floor(Math.random() * record.length)];
  if (!item) {
    return null;
  }
  return item;
}

function getQuotesByAuthor(author: authorIndexTypes): QuoteType[] {
  const record = authorIndex[author];
  if (!record) {
    return [];
  }
  return record;
}

export {
  getRandomQuote,
  getQuoteByID,
  getQuoteByCategory,
  getQuoteByAuthor,
  getQuotesByAuthor,
};
