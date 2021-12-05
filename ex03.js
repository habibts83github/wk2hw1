//exo3 Write a program to find how many times a user entered word occurs in given string
let prompt = require('prompt-sync')()
let str = prompt('enter some words:')
//const str = 'hello hello fellow boy habib';
const chars = {};
const arr = str.split(' ');

for (let word of arr) {
    if (!chars[word]) {
        chars[word]=1;   
    } else {
        chars[word]++;
    }
   }
console.log(chars)

