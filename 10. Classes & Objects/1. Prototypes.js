// Prototypes in JS
// A JS object is an entity having state and behavior (properties and methods)
// JS objects have a special property called prototype
// we can set prototype using __proto__
// if object & prototype have same method, object's method will be used

const student = {                     // objects
    fullName: "Junaid Tanveer",
    marks: 94.4,
    printMarks: function() {                 // function in object also
        console.log("marks = ", this.marks);  // this means inside that object (student.marks)
    }
};

// JS objects have a special property called prototype
// Prototype object is by-default created when an object is created in JS

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    }
}

const newEmployee = {
    salary: 50000
};

const newEmployee2 = {
    salary: 50000
};

const newEmployee3 = {
    salary: 50000
};

// lets say if we want to access employee object function in newEmployee object, we can
// set it as prototype of that function (newEmployee)
newEmployee.__proto__ = employee;     
newEmployee2.__proto__ = employee;    // we need not write calcTax function again and again
newEmployee3.__proto__ = employee;

// prototype is a reference to an object

// if object and prototype have same method then object's method will be used

const newEmployee4 = {
    salary: 60000,
     calcTax() {
        console.log("tax rate is 20%");
    }
};

newEmployee4.__proto__ = employee;    // newEmployee4 calcTax() method will take precedence

