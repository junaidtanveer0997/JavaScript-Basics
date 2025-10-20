// Callback hell
// Nested  callbacks stacked below one another forming a pyramid structure. (pyramid of doom)
// This style of programming becomes difficult to understand & manage

// nesting: loops within one another
// nested if, nested for etc

// nesting for callbacks is also possible. if it goes deeper, then callback hell problem arises

function getData(dataId) {
    setTimeout(() => {                    // database returns data in 2s
         console.log("data", dataId);
    }, 2000);
}

// lets say we take an example where we need data1, then data2 and then data3 iteratively
// for example if we want to login to a website it takes username first and then asks for password
// we can achive this thing using Callbacks

function getData2(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000)
}

getData2(1, () => {         // gets data 1 and then after 2 sec gets data 2.
    getData2(2, () => {     // getData2 function passes as a callback (as an arrow function --> right way)
        getData2(3, () => {
            getData2(4);
        });
    })             
});
// the above code is an example of nested callbacks called the callback hell
// it is complex and not easy to understand for programmers and not a good programming practice


