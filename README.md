# Quote Lib

A simple library for generating quotes.

## Installation

```bash
npm install quote-lib
```

## Usage

### Random Quote
```js
import { getRandomQuote } from "quote-lib";
console.log(getRandomQuote());
```
#### Output

```bash
{
  id: 5,
  text: "If you can't explain it simply, you don't understand it well enough.",
  author: 'Albert Einstein',
  category: [ 'motivational', 'education' ]
}
```

### Get Quote by ID

```js
import { getQuoteById } from "quote-lib";
console.log(getQuoteById(5));
```

#### Output

```bash
{
  id: 5,
  text: "If you can't explain it simply, you don't understand it well enough.",
  author: 'Albert Einstein',
  category: [ 'motivational', 'education' ]
}
```

### Get Quote by Category

```js
import { getQuoteByCategory } from "quote-lib";
console.log(getQuoteByCategory('motivational'));
```

#### Output

```bash
 {
    id: 1,
    text: "If you can't explain it simply, you don't understand it well enough.",
    author: 'Albert Einstein',
    category: [ 'motivational', 'education' ]
  }
```

### Get Quotes by Author

```js
import { getQuotesByAuthor } from "quote-lib";
console.log(getQuotesByAuthor("Chris Grosser"));
```

#### Output

```bash
[
  {
    id: 3,
    text: "Opportunities don't happen, you create them.",
    author: 'Chris Grosser',
    category: [ 'motivational', 'entrepreneur' ]
  }
]
```

### Get Quote by Author

```js
import { getQuoteByAuthor } from "quote-lib";
console.log(getQuotesByAuthor("Chris Grosser"));
```

#### Output

```bash
  {
    id: 3,
    text: "Opportunities don't happen, you create them.",
    author: 'Chris Grosser',
    category: [ 'motivational', 'entrepreneur' ]
  }
```
## License

MIT © [Pasindu P Konghawaththa](https://github.com/MasterBrian99/quote-lib)