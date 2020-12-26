'use strict';
const data = require('./data/quote.json');

const getRandomInt = lng => {
    return Math.floor(Math.random() * lng);
}

//console.log(data.length);
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


module.exports = {
    getRandom,
    getByCategory
}