//* Arguments and Parameters

// Define a function to cube a number
function cube(x) {
    return x * x * x;
}

console.log(cube(10));

// Assign a number to a value
const number = 20;
console.log(cube(number));

// Invoke the cube function without passing an argument
console.log(cube());

//* Default Parameter Syntax

// Check for undefined manually
function cubeX(x) {
    if (typeof x === "undefined") {
        x = 5
    }

    return x * x * x;
}

console.log(cubeX());

// Define a cube function with a default value
function cubeXX(x = 5) {
    return x * x * x;
}

// Invoke cubeXX function without an argument
console.log(cubeXX());
// Default ignored
console.log(cubeXX(2));
// Invoke the function with undefined
console.log(cubeXX(undefined));

//* Default Parameter Data Types

// Create function with a default value for each data type

const defaultNumber = (number = 42) => console.log("Type - Number: ",number);
defaultNumber();

const defaultString = (string = "Shark") => console.log("Type - String: ",string);
defaultString();

const defaultBoolean = (boolean = true) => console.log("Type - Boolean:", boolean);
defaultBoolean();

const defaultObject = (object = {id: 7}) => console.log("Type - Object: ", object);
defaultObject();

const defaultArray = (array = [1, 2, 3]) => console.log("Type - Array: ",array);
defaultArray();

const defaultNull = (nullVal = null) => console.log("Type - Null: ", nullVal);
defaultNull();


// Define a setting function with a default object

function settings(options = {}) {
    const {theme, debug } = options;

    // Do something with settings
    console.log("Empty Setting function: ",options)
}
settings();


// Multiple Default Parameters
function sum(a = 1, b = 2){
    return console.log("Multiple Default Parameter: ",a + b);
}
sum();

// Define a function to create a user object using parameters
function createUser(name, rank, userObj = { name, rank }){
    return userObj;
}

// Create User
const user = createUser("Bakibillah Sakib", "Web Dev");
console.log(user);

// Define a function with a default parameter at the start of the list

function defaultFirst(a = 5, b){
    return console.log("Default parameter at the start of the list(5 + 2): ",a + b);
}
defaultFirst(undefined, 2);

// Define a function with a default parameter at the end of the list

function defaultLast(a, b = 5){
    return console.log("Default parameter at the end of the list(2 + 5): ",a + b);
}
defaultLast(2, undefined);

// Define function to create an element
function createNewElement(tag, text, classNames = []){
    const el = document.createElement(tag);
    el.textContent = text;

    classNames.forEach(className => {
        el.classList.add(className)
    })

    return el;
}

const greeting = createNewElement("h1", "Hello!", ["greeting", "active"]);
const greeting2 = createNewElement("p", "Hello!");

console.log(greeting);
console.log(greeting2);

//* Function Calls as Default Parameters

// Define a function to return a random number from 1 to 10
function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}

// Use the random number function as a default parameter for the cube function

function cube3X(x = getRandomNumber()) {
    return x * x * x;
}

console.log(cube3X());
console.log(cube3X());
console.log(cube3X());

// Assign a random number to x
// Assign the cube root of the result of the cube function and x to y

function doesXEqualY(x = getRandomNumber(), y = Math.cbrt(cube3X(x))) {
    return x === y;
}

console.log(doesXEqualY());

// Define a function with a default parameter that is an anonymous function

function outer(
    parameter = function inner() { return 100; }
){
    return parameter();
}

// Invoke outer function
console.log(outer());