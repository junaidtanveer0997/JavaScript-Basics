// Strings
// Sequence of characters used to represent text

let str = "Junaid";

// strings have some in-built properties / functions called methods
console.log("String Length = ", str.length);

// string indices string[index number]
console.log(str[0]);

// template literals
let specialString = `This is a template literal`;  // initialized using backticks
console.log(specialString);

// example of template literals
let obj = {
    item: "pen",
    price: 10
};
console.log(`The cost of ${obj.item} is ${obj.price}`);  // placeholders in strings (string interpolation)

// escape characters in strings
console.log("Junaid \n Tanveer");   // new line
console.log("Junaid \t Tanveer");   // tab space. escape charaters length is considered as single character

// String Methods in JS
// these are built-in functions to manipulate a string

let str1 = "Junaid";
let str2 = "Malik";
let str3 = "hello";
console.log(str1.toUpperCase());   // converts string to uppercase
console.log(str1.toLowerCase());
console.log(str1.trim());      // removes whitespace from starting and ending
console.log(str1.slice(1,4));    // last index is non-inclusive
console.log(str1.slice(2));      // from this index to end of string
console.log(str1.concat(str2));   // joins str2 with str1, str1+str2 (can also perform concatenation in JS)
console.log(str.replace("h", "y"));   // replaces 1st matching character. replaceall() all matching values replace
console.log(str1.charAt(2));   // character at specific index 

// strings are immutable in JS. new string create for a new change
// Documentation: https://developer.mozilla.org/en-US/