// DOM is used to make dynamic changes in our webpage
// we can access html code through Document Object Model (DOM)

// we can access the contents of html file if we know
// any one of the three things (tag, class, id)

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Student of JS"
console.dir(h2.innerText);

// we change the elements of html in JS, if we want to dynamically change something
// in our webpage. therefore, we access html elements from JS

// Create 3 divs with common class name - “box”. Access them & add some unique text to each
// of them

let divs = document.querySelectorAll(".box");
console.log(divs);   //nodeList

for(let i=0; i<divs.length; i++) {
    divs[i].innerText = `new unique value ${i+1}`;     // template literals
}