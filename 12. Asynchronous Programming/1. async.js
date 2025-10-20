// Sync in JS
// Synchronous: Synchronous means the code runs in a particular sequence of instructions
// given in the program. Each instruction waits for the previous instruction to complete
// its execution

console.log("one");   // synchronous programming
console.log("two");
console.log("three");

// Asynchronous: Due to synchronous programming, sometimes imp instructions get blocked due
// to some previous instructions, which causes a delay in the UI. Asynchronous code execution
// allows to execute next instructions immediately and does not block the flow

function hello() {
    console.log("hello");
}

setTimeout(hello, 4000);    // timeout executes instruction after a particular time (2s in this case)

console.log("four");
console.log("five");
