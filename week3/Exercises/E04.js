'use strict';

const Handlebars = require('handlebars');

const subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"] ;
const punchlines = ["watch movie with", "spread some love", "put on cake", "clean toilets", "go to the moon", "achieve world piece", "help people learn programing"];

function random(array){
  return array[Math.floor(Math.random() * array.length)]
};

const randomCollection = {
  subject: random(subjects),
  punchline: random(punchlines)
}

const source = `{{subject}} is great to {{punchline}}`;
const template = Handlebars.compile(source);
const result = template(randomCollection);

console.log(result);