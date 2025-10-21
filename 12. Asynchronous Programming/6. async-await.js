// Async-Await
// async function always returns a promise
// async function myFunc() {...}

async function hello() {               // returns a promise
    console.log("hello");
}

// await
// await pauses the execution of its surrounding async function until the promise is settled
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000)
    })
}

async function getWeatherData() {       // will return promise
    await api();                       // await is always utilized in async function and pauses the execution of further code till the promise is resolved
    await api();       // this is 2nd call. the above line is the 1st call
}

// in maximum scenarios we use async-await, because it is a better form of programming

// IIFE: Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined
// e.g (func)();

// now we dont need to call getWeatherData() explicitly. it is invoked immediately by IIFE
(async function () {       
    await api();                      
    await api();       
})();

// IIFE documentation (MDN docs)