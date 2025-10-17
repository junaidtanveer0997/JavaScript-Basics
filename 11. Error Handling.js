// Error Handling
// try catch

// try { ... normal code... }
// catch(err) {// err is error object
//  ... handling error}

// if error occurs in try block then that is catched in catch block which gives us the
// error and the remaining lines of code below it are executed normally
// without try-catch, further code lines below are not executed at all

let a = 5;
let b = 10;
console.log(a)
console.log(b);
console.log(a+b);
try {
    console.log(a+c);
}
catch (err) {
    console.log(err);
}

// these lines will be executed normally even if the error occurs in above lines
console.log(a+b);
console.log(a+b);
console.log(a+b);