// print on console in JS
console.log("Welcome Junaid");
console.log("I love JavaScript");

// variables is JS. variable are dynamically typed in JavaScript
// = is called assignment operator
// variable names are case sensitive; a & A are different
// space is not allowed in variable names
// reserved words cant be variable names
// fullName --> camel case, preferred in programming

//fullName = "Tony Stark";
age = 24;
radius = 14;
price = 99.99;
x = null;                // special value
y = undefined;           // also a special value
isFollow = false;        // boolean
//console.log(isFollow);

// let, const & var
let fullName = "tony stark"; //variable cant be re-declared but can be updated. A block scope variable
console.log(fullName);      // let is go-to keyword to declare variable is JS. var is not used

//ES6 (modern JS) --> 2015 (var is no longer used to declare variables. can be redeclared and updated)
var age = 24;    // being able to redeclare variable is not a good coding practice
var age = 59;    // var is a global scope variable
var age = 86;
console.log(age);

const pi = 3.14;   // const: variable cannot be re-declared or updated. A block scope variable.
console.log(pi);

// let & const have local / block scope. while var is used for global scope

// Data Types in JS
// Primitive data types (07--> number, string, boolean, undefined, null, BigInt, Symbol)
let x = BigInt("123");
let y = Symbol("hello!");

// Non-primitive data types (objects [collection of values]--> arrays, functions)
const student = {           // object collection of values. stored in form of key-value pairs
    fullName : "Junaid",    // student.key or student["key"] --> to access keys
    age : "20",
    cgpa : "8.2",
    isPass : true
};
student["age"] = student["age"] + 1; // to update value in object
// we can update key for const object
console.log(student.age);