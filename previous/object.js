// Creating an object

// Two Type object - literal - constructor

// Init Literal - Literal uses {} 
const objectLiteral = {};

// Init constructor - constructor with new()
const objectConstructor = new Object();

// Initialize gimli object
const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hello, my name is ${this.name}!`;
    }
}

console.log(gimli);
// Properties and Methods

// Property is like Noun -- name, race, weapon

// Methods is like Verb -- fight(), talk()

// Accessing Object Properties

// Two ways to access an object properties

// 1. Dot notation = (.)
// 2. Bracket notation = []

let dot = gimli.weapon;
console.log('Dot notation ->', dot);

let bracket = gimli["weapon"];
console.log('Bracket notation ->', bracket);

let greet = gimli.greet();
console.log(greet);

// Adding and Modifying object properties
let age = gimli.age = 32;
console.log(age);
let ageB = gimli["age"] = 139;
console.log(ageB);
console.log(gimli);

// Add new fight method to gimli
gimli.fight = function() {
    return `${this.name} attacks with an ${this.weapon}`
}

let meth = gimli.fight();

console.log(meth);
console.log(gimli);

// Update weapon from axe to bottle axe
gimli.weapon = "battle axe";
console.log(gimli);

// Remove weapon from gimli
let d = delete gimli.weapon;
console.log('Deleted weapon =',d);
console.log(gimli);

const gimli2 = {
    name: "Gimli",
    race: "dwarf",
    weapon: "battle axe"
}
// Looping through object properties
for(let key in gimli2){
    console.log(gimli2[key]);
}

// Initialize method on gimli object to return property keys
let OK = Object.keys(gimli2);
console.log(OK);