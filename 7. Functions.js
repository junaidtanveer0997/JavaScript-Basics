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