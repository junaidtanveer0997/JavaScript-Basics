// create a website for your college. create a class User with 2 properties, name & email. 
// It also has a method called viewData() that allows user to view website data

// Create a new class viewData() that allows the user to view website data. Add a new method
// called editData to Admin that allows it to edit website data

let DATA = "Secret Information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", DATA);
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name, email);    // to invoke parent class constructor
    }

    editData() {
        DATA = "some new value";
    }
}

let student1 = new User("student1", "student1@email.com");
let student2 = new User("student2", "student2@email.com");

let teacher1 = new User("Dean", "dean@college.com");

let admin1 = new Admin("admin", "admin@college.com");