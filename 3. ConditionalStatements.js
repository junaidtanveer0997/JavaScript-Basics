// Conditional Statements
// To implement some condition in the code

// if statement
let age=25;
if (age > 18) {
    console.log("you can vote");
}
if (age < 16) {
    console.log("you cannot vote");
}

// if-else statement
let age1 = 25;
if (age1 > 18) {
    console.log("you can vote");
}
else {
    console.log("you cannot vote");
}

// else-if statements
let mode = "dark";
let color;
if (mode === "dark") {
    color = "black";
}
else if (mode === "blue") {
    color = "blue";
}
else {
    color = "white";
}
console.log(color);

// Ternary Operators (3 operands)
let age2 = 25;
let result = age2 >= 18 ? "adult" : "not adult"; // simpler, compact if-else
console.log(result)

// anything related to JS docs can be searched in MDN Docs
// https://developer.mozilla.org/en-US/

//Switch Statement
// The switch statement evaluates an expression, matching the expression's 
// value against a series of case clauses, and executes statements after 
// the first case clause with a matching value, until a break statement is 
// encountered. 
const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
    console.log(0);
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}
// Logs 0 and 1

// take input from user
//alert("hello");
let num = prompt("enter a number:");

if (num % 5 === 0) {
    console.log(num, "is multiple of 5");
}
else {
    console.log(num, "is NOT a multiple of 5");
}