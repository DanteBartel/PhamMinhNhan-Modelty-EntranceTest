# PhamMinhNhan-Modelty-EntranceTest

## Preparing

Clone the repository and prepare a terminal with Node installed.

Get Node from here:

https://nodejs.org/en

## Problem 01

### Question:

Write a program that prints the numbers from 1 to 100. However, for multiples of a given number x, print "Foo" instead of the number, and for multiples of another given number y, print "Bar". For numbers which are multiples of both x and y, print "FooBar". The values of x and y should be input by the user.

### Solution:

The function that do the FizzBuzz printing is defined in ```FizzBuzz.js```. To view the result of this function, use the script ```ans01.js``` and input interger ```x```, then ```y```, into the terminal.

```bash
# From repository root
cd problem01
node ans01.js
```

## Problem 02

### Question:

Write a function that checks whether a given string is a palindrome, considering only alphanumeric characters and ignoring cases. Additionally, the function should handle Unicode characters properly.

### Solution:

The function that checks for palindrome is defined in ```isPalindrome.js```. To view the result of this function, use the script ```ans02.js``` and input the desired string into the terminal.

```bash
# From repository root
cd problem02
node ans02.js
# Then, input the string that want to check for
```

## Problem 03

### Question:

Write a function that groups a list of strings into anagrams. Each group should contain the strings that are anagrams of each other.

### Solution:

The function that handling the grouping is defined in ```groupAnagrams.js```. To view the result of this function, write the desired input in ```input.js``` and use the script ```ans03.js```.

```bash
# From repository root
cd problem03
# Change the input list in the input.js file, then
node ans03.js
```

## Problem 04

### Question:

Write a function that rotates a sparse array (an array with a significant number of default values, such as None) to the right by a given number of steps. Ensure the default values are preserved in their relative positions.

### Solution:

The function that handling the right rotate is defined in ```rotateRight.js```. To view the result of this function, write the desired input in ```input.js``` and use the script ```ans04.js```.

```bash
# From repository root
cd problem04
# Change the input array and the number of steps in the input.js file, then
node ans04.js
```

## Problem 05

### Question:

Create a simple HTML page with a form that includes:

- A text input for the user's name.
- A number input for the user's age.
- A dropdown for selecting the user's favorite color (with at least three options).
- A submit button.

When the form is submitted, display the inputted values on the same page without refreshing. Additionally, change the background color of the page to the selected favorite color.


### Solution:

Run the ```index.html``` file using a web browser like Chrome, Firefox, and Safari.

## Problem 06

### Question:

Write a script in any programming language that makes a GET request to a public API of your choice (excluding JSONPlaceholder) and processes the response in a meaningful way. For instance, you could fetch weather data and print a summary of the current weather conditions.

### Solution:

This solution will get a random country from a free api called "sampleapis" and print out some information like country name, capital, currency, or population.

```bash
# From repository root
cd problem06
node ans06.js
```