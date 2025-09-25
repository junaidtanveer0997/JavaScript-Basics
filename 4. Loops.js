// Loops
// Loops are used to execute a piece of code again & again

// for loop
for (let i = 1; i<=5; i++) {
    console.log("JavaScript is cool!!")
}

//calculate sum of n numbers
let n = prompt("enter a number:");
let sum = 0;
for (let i = 1; i<=n; i++) {  // i is defined in block scope. var is global
    sum += i;
}
console.log(sum);


//infinite loop (a loop that never ends)

//while loop 
// while (stopping condition)
let num1 = 1;
while (num1 <= 5) {
    console.log(num1);
    num1++;             //updation inside while loop
}

// do while loop
