//* Object Methods

// 1. Object.create()

// Initialize an object with properties and methods

const job = {
    postion: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting application' : 'is not currently accepting application';

        console.log(`The ${this.postion} position is ${this.type} and ${accepting}`);
    }
};

// Use Object.create() to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();

// 2. Object.keys()

// Initialize an object 
const employees = {
    boss: "Nasif",
    secretary: "Nafis",
    sales: "Najib",
    accountant: "Sakib"
};

// Get the keys of the object
const keys = Object.keys(employees);
console.log("Object Keys:", keys);

// Get the length of the object
const lengthObject = Object.keys(employees).length;
console.log("Object Lengths: ", lengthObject);

// 3. Object.values();

// Initialize an object
const session = {
    id: 1,
    time: "04-May-1990",
    device: "mobile",
    browser: "Chrome"
};

// Get all values of the object
const objectValues = Object.values(session);
console.log("Object Values: ",objectValues);

// 4. Object entries()

// Initialize an object
const operatingSystem = {
    name: "Ubuntu",
    version: 18.04,
    license: "Open Source"
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);
console.log("Object key/value pairs: ",entries);

// Loop through the result
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`Object Loop with forEach: ${key}: ${value}`);
});

// 5. Object.assign();

// Initialize an object 
const name = {
    firstName: "Bakibillah",
    lastName: "Sakib"
};

// Initialize another object
const details = {
    job: "Web Developer",
    employer: "Upwork"
};

// Merge the objects
const character = Object.assign(name, details);
const character2 = {...name, ...details};
console.log("Object merge: ",character);
console.log("Object merge another way: ",character2);

// 6. Object.freeze()

// Intialize an object
const user = {
    username: "sakibian",
    password: "hunter2"
};

// Freeze an object
const newUser = Object.freeze(user);

newUser.password = "********";
newUser.active = true;

console.log(newUser);

// Object.isFrozen() is available to determine whether an object has been frozen or not, and returns a Boolean


// 7. Object.getPrototypeOf()

const employees2 = ["sakib", "najib", "shibbir", "mukim", "nafis", "labib"];

let seeEmployees = Object.getPrototypeOf(employees2);
let compareEmployees = Object.getPrototypeOf(employees2) === Array.prototype;
console.log("Object Get Protoype Of",seeEmployees);
console.log("Object Protoype Compare with Array Protoype: ",compareEmployees);