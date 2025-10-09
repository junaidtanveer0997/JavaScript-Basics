// Functions in JS
// Block of code that performs a specific task, can be invoked when needed

// function definition
// function functionName(param1, param2,....) {// do some work}

// function call
// functionName();

// functions save us from redundancy in programming

// function can return a value

function sum(x, y) {      // arguments passed are local variables (scope)
    sum = x + y;
    return sum;         // code below return statement is unreachable 
}

let val = sum(3, 4);  // the function returns a value. no need for console.log
console.log(val);

// Arrow Functions
// compact way of writing a function

// subtraction function
function subtraction(a, b) {
    return a-b;
}

const arrowSum = (a, b) => {         // modern way of JS
    return a - b;
}

arrowSum(5,3)         // arrowSum is function variable

// we can also write hello function without passing any arguments
const printHello = () => {
    console.log("hello");
}
printHello();

// forEach loop in Arrays
//arr.forEach(callBackFunction)
// a callback function is a function passed as an argument to another function
// Javascript has a special property that functions can be passed as regular argument / variables
// and their values can also be returned like a regular variable

let arr = [1,2,3,4,5];

arr.forEach(function printVal(val) {   // function passed as an argument (special prop of JS)
    console.log(val);
});

arr.forEach((val) => {
    console.log(val)
});

// forEach loop is used when we need to perform some task for each element of an array
// lets say we need to convert all values in a string to uppercase
// callback function can take 3 arguments (value, idx, array) --> optional arguments

let cities_arr = ["lahore", "sialkot", "karachi"]

cities_arr.forEach((val, idx, cities_arr) => {
    console.log(val.toUpperCase(), idx, cities_arr)
});


// Higher Order Function / Methods 
// those functions that take other function as parameter or returns another function as output
// e.g the function that has a callback function is a higher order function

// Some More Array Methods

// Map: Creates a new array with the result of some operation. The value its callback returns
// are used to form new array
// arr.map(callbackFnx(value, index, array))

let test_nums = [67, 52, 39];

let newArr = test_nums.map(val => {
    return val;                          // returns a new array (array copy in this example)
});

console.log(newArr);

// Filter: Creates a new array of elements that give true for a condition / filter
// e.g. all even elements

let test_nums2 = [1, 2, 3, 4, 5, 6, 7];

let evenArr = test_nums2.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);

// Reduce: Performs some operations & reduces the array to a single value. It returns that
// single value

const output_num = test_nums2.reduce((result, current) => {
    return result + current;
});

console.log(output_num);
