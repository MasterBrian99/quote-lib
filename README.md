# Quote-lib

#### get a random quote from specific category or from a famous person.

## Installation

```sh
$ npm i quote-lib --save
```

## Usage

```sh
$ const quotes=require('quote-lib');
```

##### get a random quote

---

```sh
$ const quote=quotes.getRandom();
$ console.log(quote);
//result
    {
        "category": [
            "motivational",
            "entrepreneur"
        ],
        "quote": "Successful entrepreneurs are givers and not takers of positive energy.",
        "author": "Anonymous"
    }
```

##### get a quote from specific category

---

```sh
$ const quote=quotes.getByCategory('programming');
$ console.log(quote);
//result
{
  category: [ 'programming' ],
  quote: 'The most disastrous thing that you can ever learn is your first programming language.',
  author: 'Alan Kay'
}
```

##### get a quote from famous a person

---

```sh
$ const quote=quotes.getByAuthor('Mahatma Gandhi');
$ console.log(quote);
//result
{
  category: [ 'education', 'motivational' ],
  quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
  author: 'Mahatma Gandhi'
}
```

## Available Categories

> motivational
> entrepreneur
> education
> programming

### Pull requests are welcome.
