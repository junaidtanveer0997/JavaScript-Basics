// Promise Chain 

// the below function is usually being performed by APIs
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 3000)
    })
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("success");
        }, 3000)
    })
}

console.log("fetching data1....");
let p1 = asyncFunc();        // we normally get the promises from APIs in this form and then apply then() or catch() function on it

p1.then((res) => {                     // promise chain
    //console.log(res);
    console.log("fetching data2....");
    let p2 = asyncFunc2();  // execute 2nd func asyncFunc2() when promise1 is fulfilled
    p2.then((res) => {})
})