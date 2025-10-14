// DOM is used to make dynamic changes in our webpage
// we can access html code through Document Object Model (DOM)

// DOM Manipulation
// Attributes

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));   //gets attribute
console.log(para.setAttribute("class", "newClass"));  //sets attribute

// style
// we can also change style of the element from JS
// node.style
div.style.backgroundColor = "purple";
div.style.fontSize = "26px";

// insert elements
// create element and add 

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);
/*div.append(newBtn); */     // add at the end of the node (inside)
/*div.prepend(newBtn); */       // adds at the start of the node (inside)
/*div.before(newBtn); */       // adds before the node (outside)
div.after(newBtn);             // adds after the node (outside)

// add a new heading
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i> Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);

// we can also delete the element / node 
// node.remove()   --> deletes the element

para.remove()

// appendChild() and removeChild() from MDN Docs
// classList property in JS also from MDN Docs
