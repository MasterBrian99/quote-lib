import { getQuoteByID, getRandomQuote } from "./lib";
import { expect, test } from "vitest";
test("should get random quote", () => {
  const randomQuote = getRandomQuote();
  expect(randomQuote.id).toBeTypeOf("number");
  expect(randomQuote.category).toBeTypeOf("object");
});

test("should get unique quote (well, sometimes)", () => {
  const randomQuote1 = getRandomQuote();
  const randomQuote2 = getRandomQuote();
  expect(randomQuote1.id).not.toEqual(randomQuote2.id);
});

test("get quote by id", () => {
  const quote = getQuoteByID(2);
  const quoteAgain = getQuoteByID(2);
  if (quote && quoteAgain) {
    expect(quote.id).toEqual(quoteAgain.id);
  }
  const quoteNull = getQuoteByID(99999);
  expect(quoteNull).toBeNull();
});
