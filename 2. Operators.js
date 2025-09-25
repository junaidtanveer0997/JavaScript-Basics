/* boilerplate code
 boiler plate code 2 */

// Operators in JS (+, -, *, /, Modulus, Exponentiation, Increment, Decrement)
//Arithmetic operators
let a = 5;
let b = 2;  
console.log("a + b = ", a+b);    //*, /, -, % (all operators)
console.log("a % b = ", a%b);
console.log("a ** b = ", a**b);    // a to the power of 2. ** exponentiation

// Unary Operators (++ increment, --decrement)
// a++ (post increment), ++a (pre increment, value will be changed first)
a++;             // a-- 
console.log(a);  //6

// Assignment Operators (=, +=, -=, *=, %=, **=)
a += 3;             // a = a+3, a-=3, a*=3, a/=4, a%=4, a**=4
console.log(a);   //9

// Comparison Operators
// (Equal to ==, Equal to & type ===, Not Equal to !=, Not Equal to & type !==)

console.log("a==b", a==b);     // return boolean value
console.log("a==b", a!=b); 
// === stricter version of equal to. also checks data type. like num 5 & str "5" are not equal
// same with !==
console.log("a===b", a===b);   // more frequently used in JS
console.log("a!==b", a!==b);

// >, >=, <, <=
console.log("a>b", a>b);

// Logical Operators
// Logical AND &&, Logical OR ||, Logical NOT !
let c= 6;
let d= 5;
let cond1 = c>d;
let cond2 = c===6;
console.log("cond1 && cond2 =", cond1 && cond2);  //console.log("cond1 || cond2 =", cond1 || cond2);
console.log("!(a<b)", !(a<b));   //true --> false, false --> true 