'use strict';
const data = require('./data/quote.json');

const getRandomInt = lng => {
    return Math.floor(Math.random() * lng);
}

const getRandom = () => {
    return data[getRandomInt(data.length)];
}

const getByCategory = (category) => {
    const ByCategory = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].category.includes(category)) {
            ByCategory.push(data[i]);
        }
    }
    return ByCategory[getRandomInt(ByCategory.length)];
}

const getByAuthor = (author) => {
    const byAuthor = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].author.includes(author)) {
            byAuthor.push(data[i]);
        }
    }
    return byAuthor[getRandomInt(byAuthor.length)];
}

module.exports = {
    getRandom,
    getByCategory,
    getByAuthor
}