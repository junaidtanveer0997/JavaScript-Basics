// Callbacks
// A callback is a function passed as an argument to anothe function

function sum(a, b) {
    console.log(a+b);
}


function calculator(a, b, sumCallback) {
    sumCallback(a, b);
} 

calculator(1, 2, sum);