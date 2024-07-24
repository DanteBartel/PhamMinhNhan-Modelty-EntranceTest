// require files
const rotateRight = require('./rotateRight.js');
const input = require('./input.js');

// Call the function and log the result
const {array, steps} = input;
rotateRight(array, steps);
console.log(array);
