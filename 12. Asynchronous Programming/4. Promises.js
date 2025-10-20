// Promises
// It is a solution to callback hell
// Promise is for "eventual" completion of task. It is an object in JS

// e.g. if we order from amazon and make online payment then this is an unfulfilled promise.
// if the order is received then promise is resolve otherwise promise is reject

// let promise = new Promise((resolve, reject) => {...})  (function with 2 handlers)
// resolve & reject are callbacks provided by JS

// promise has 3 states (pending, fulfilled / resolved, rejected)

/*
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    //resolve(123);
    reject("some error occured");
})
*/

// In general we utilize Promises when we are dealing with APIs. APIs responsds / returns us in the 
// form of Promises and then we extract our relevant info / data from Promises

/*
function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            // reject("error");             // if data is not received
            if (getNextData) {
                getNextData();
            }
        }, 5000)
    })
}
*/

// the above is the example of creating promises or resolve / reject them
// but we dont need to create Promises
// We need to know that once Promise is returned to us (e.g from an API), how will we use them

// .then(): promise.then((res) => {...})
// .catch(): promise.catch((err) => {...})

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a Promise");
        //resolve("success");
        reject("error");
    })
}

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled". res);
})

promise.catch((err) => {
    console.log("rejected", err);
})
