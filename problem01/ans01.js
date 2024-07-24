const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fizzbuzz = require('./FizzBuzz.js');

rl.question('Enter the positive integer x: ', (inputX) => {
    const x = parseInt(inputX);
    rl.question('Enter the positive integer y: ', (inputY) => {
        const y = parseInt(inputY);
        fizzbuzz(x,y);
        rl.close();
    });
});
