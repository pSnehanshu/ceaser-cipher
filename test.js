const ceaser = require('./ceaser');
const readline = require('readline-sync');

let inputText = readline.question('Enter a text: ');
let key = readline.questionInt('Enter a key [INT] (default: 5): ', {
    defaultInput: 5,
});

console.log('Ceaser cipher:', ceaser(inputText));
