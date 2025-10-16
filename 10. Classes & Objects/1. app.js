// Prototypes in JS
// A JS object is an entity having state and behavior (properties and methods)
// JS objects have a special property called prototype
// we can set prototype using __proto__
// if object & prototype have same method, object's method will be used

const student = {                     // objects
    fullName: "Junaid Tanveer",
    marks: 94.4,
    printMarks: function() {                 // function in object also
        console.log(`marks = ${marks}`)
    }
};