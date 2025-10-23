// Fetch API (Application Programming Interface)
// The fetch API provides an interface for fetching (sending / receiving) resources
// It uses Request and Response objects.
// The fetch() method is used to fetch a resource (data)
// let promise = fetch(url, [options])

const URL = "https://dogapi.dog/api/v2/breeds";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

/*
let promise = fetch(URL);     // fetch returns us a promise
console.log(promise);
*/

// to extract result from Promises we use async-await

/*
const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);    // to call an API and get data is an asynchronous process (GET request)
    console.log(response);
    let data = await response.json();     // json() returns second promise. converts response into usable json format
    //console.log(data);    
    //console.log(data["data"][0].type);  
    factPara.innerText = data["data"][0]["type"];       
}
*/

//btn.addEventListener("click", getFacts);

// fetch() method takes GET request as default is nothing is given in [options] argument

// Understanding Terms
// AJAX: Asynchronous JS & XML
// JSON: JavaScript Object Notation
// json() method: returns a second promise that resolves with the result of parsing the response body test as JSON
// (Input is JSON, output is JS object)

// above task using Promise Chain
function getFacts() {
    fetch(URL)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data["data"][0]["type"]; 
    })
}

btn.addEventListener("click", getFacts);
