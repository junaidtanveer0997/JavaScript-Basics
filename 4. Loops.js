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
// this loop will run for atleast 1
let i = 20;
do {
    console.log("This loop runs atleast once");
}
while (i<=10);

// for-of loop (special loop)
// helps in implementing loop on strings and arrays 
let str = "Junaid";

let size = 0;
for (let j of str) {           //iterates thru string str (iterator)
    console.log("j=", j)      // prints all characters of str
    size++;
}
console.log("string size = ", size);
 
// for-in loop
// can be used for objects and arrays
let student = {                             //object
    name: "Junaid",
    age: 20,
    cgpa: 7.5,
    isPass: true
};

for (let key in student) {     
    console.log("key=", key, "value=", student[key]);         
}


// practice question
let gameNum = 25;
let userNum = prompt("Guess the game number: ");

while (userNum != gameNum) {
    userNum = prompt("You entered wrong number. Guess again : ");
}
console.log("congratulations, you entered the right number");