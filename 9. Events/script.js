// Events in JS
// The change in the state of an object is known as an Event
// Events are fired to notify code of "interesting changes" that may affect code execution
// Mouse events (click, double click etc), keyboard events (keypress, keyup, keydown), 
// Form events (submit etc), print event & many more

// Event Handling in JS
// node.event=() => {// handle here}

let btn1= document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked via Handler 1");
    let a = 25;
    a++;
    console.log(a);
}

// we can handle event only once and if we try to handle it multiple times, it would overwrite
btn1.onclick = () => {
    console.log("btn1 was clicked via Handler2");    // overwrite
}

let box = document.querySelector("div");
box.onmouseover = () => {
    console.log("you are inside div");
}

// if an event is handled in both inline handle and JS handle, then the priority is given to
// JS event handling and not inline handling

// Event object
// It is a special object that has details about the event
// all event handlers have access to the Event Object's properties and methods
// node.event = (e) => { // handle here }
// e.target, e.type, e.clientX, e.clientY

let btn3 = document.querySelector("#btn3");

btn3.onclick = (e) => {     // e is the argument for event object
    console.log(e);
    console.log(e.type);               // click
    console.log(e.target);   // where the event occured in html
    console.log(e.clientX, e.clientY);
}

// Event Listeners
// they keep on listening to the event and executes the calback when the event occurs
// node.addEventListener(event, callback)
// node.removeEventListener(event, callback)
// Note: The callback reference should be same to remove

// using event listeners we can perform multiple tasks on the same event
let btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", (e) => {
    console.log("button4 was clicked - handler1");
    console.log(e);                         // event object
});

btn4.addEventListener("click", () => {
    console.log("button4 was clicked - handler2");
});

const handler3 = () => {
    console.log("button4 was clicked - handler3");
};

btn4.addEventListener("click", handler3);

btn4.addEventListener("click", () => {
    console.log("button4 was clicked - handler4");
});

// remove Event Listener
btn4.removeEventListener("click", handler3);

// Practice Question
// Create a toggle button that changes the screen to dark-mode when clicked and light-mode
// when clicked again

let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        //document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
    }
    else {
        currMode = "light";
        //document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(currMode);
});