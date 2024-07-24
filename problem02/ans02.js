const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const isPalindrome = require('./IsPalindrome.js');

rl.question('Enter the string to check if it is a palindrome: ', (s) => {
    console.log(isPalindrome(s));
    rl.close();
});