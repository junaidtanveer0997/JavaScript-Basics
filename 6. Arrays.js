// Arrays in JS
// Collection of items, linear way of storing information
// position / index of items matter in arrays

let marks = [97, 82, 75, 64, 36];
console.log(marks);
console.log(marks.length);    // property. gives length of array

let heroes = ["ironman", "thor", "hulk", "spiderman", "antman"];
console.log(heroes);

// array is object data type (index has values assigned to it like key-value pair)

// array indices. arr[i]
console.log(marks[0]);

// arrays are mutable. they can be changed. strings are immutable
marks[2] = 78;          // index 2 value will be changed
console.log(marks);

// looping over an array
let heroes2 = ["ironman", "thor", "hulk", "spiderman", "antman", "batman"];
for (let idx = 0; idx < heroes2.length; idx++) {
    console.log(heroes2[idx]);
}

// lopping using for-of loop
for(let hero of heroes2) {        //more convenient way of iterating over arrays
    console.log(hero);
}

// array methods
let test_arr = [1,2,3,4,5,6,7]
let test_arr2 = [8,9,10];
test_arr.push(8);               // adds element to the end of array
console.log(test_arr);
test_arr.push(9,10);          // add multiple vals to end of arrays
console.log(test_arr);

test_arr.pop();              // deletes from end of array and returns
console.log(test_arr);

console.log(test_arr.toString());   // converts all array items to strings

//array concatenation
arr_concat = test_arr.concat(test_arr2);  // concatenates arrays and returns results
console.log(arr_concat);

// unshift() method: add to start (same like push)
test_arr.unshift(0);
console.log(test_arr);

// shift() method: deletes from start (same like pop)
test_arr.shift();
console.log(test_arr);
 
// slice() method: returns a piece of the array
// slice(startIdx, endIdx)
console.log(test_arr.slice(1, 3))   // ending index is non-inclusive

//splice() method: change original array (add, remove, replace)
// splice(startIdx, deleteCount, newElements1....)
// splice can be used to add, remove and replace elements in an array based on the 3 arguments that it takes

console.log(test_arr.splice(2,2,101,102));