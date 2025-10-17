// Inheritance in JS
// Inheritance is passing down properties & methods from parent class 
// to child class

class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {          // inheritance

}

let obj = new Child();

// another example

class Person {
    constructor() {
        this.species = "home sapiens";
    }

    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person {
    work() {                                            
        console.log("solve problems. build something");
    }
}

//when parent class and child class have function. Child Class function is invoked (Method overriding)
let junaidObj = new Engineer();


// Super Keyword
// The super keyword is used to call the constructor of its parent class to access the parent's
// properties and methods
// super(args)  // calls Parent's constructor
// super.parentMethod(args)

class Person2 {
    constructor(name) {
        console.log("enter parent constructor");
        this.species = "home sapiens";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
}

class Engineer2 extends Person2 {
    constructor(branch, name) {
        console.log("enter child constructor");
        super(name);    // to invoke parent class constructor. otherwise error
        // if we want to access name from Parent Class constructor, we need to pass it in super keyword
        this.branch = branch;
        console.log("exit child constructor");
    }
    work() {     
        super.eat();                // super keyword can also be used to invoke method of Parent class                                
        console.log("solve problems. build something");
    }
}

let engObj = new Engineer2("Electrical Engineering", "Junaid");