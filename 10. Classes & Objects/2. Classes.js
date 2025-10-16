// Classes in JS
// Class is a program-code template for creating objects

// when we want to save / create similar objects then we can use classes
// classes gives a template for creating objects

// these objects (classes) will have some state (variables) & some
// behaviour (functions) inside it

class ToyotaCar {

    constructor(brandName, mileage) {         //brandName and mileage are properties of the class
         console.log("creating new object");
         this.brandName = brandName;
         this.mileage = mileage;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brand = brand;       // this is used to define object property
    }
}

// to create an object from this template 
// let myObj = new ClassName()
// new keyword invoked constructor automatically
let fortuner = new ToyotaCar("fortuner", 10);      // new keyword create new object for us through classes
console.log(fortuner);
//fortuner.setBrand("fortuner");
let lexus = new ToyotaCar("lexus", 12);      // for each object we need not to define same function / property
console.log(lexus);
//lexus.setBrand("lexus");


// Constructor
// Constructor() is a special method of a class
// this method is automatically invoked by new keyword
// initializes object