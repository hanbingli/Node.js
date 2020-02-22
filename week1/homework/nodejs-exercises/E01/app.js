'use strict'

let padLeft = require('./andrejs-awesome-function');

const numbers = ['12', '846', '2', '1236'];

numbers.forEach(x => {console.log(padLeft(x, 4, '_'))});
