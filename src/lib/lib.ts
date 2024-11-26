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

export { getRandomQuote, getQuoteByID };
