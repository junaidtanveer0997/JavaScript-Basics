// Inheritance in JS
// Inheritance is passing down properties & methods from parent class 
// to child class

class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {

}

let obj = new Child();