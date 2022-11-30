//* Defining a Function

// function nameOfFunction(){ ... }

// Initialize greeting function 
function greet() {
    console.log("Hello, World!");
}
// Invoke the function
greet();

// let greetF = greet();
// console.log(greetF);

//* Function Parameters
function greetName(name){
    console.log(`Hello, ${name}`);
}

greetName("Bakibillah Sakib");

//* Returning Values

// Initialize add function
function add(x, y) {
    return x + y;
}
let sum1 = add(9, 7);
console.log(sum1);

// Function Expressions
const sum = function add(x, y) {
    return x + y;
}

let plusSum = sum(20, 5);
console.log(plusSum);

// Assign function to sum2 constant
const sum2 = function(x, y) {
    return x + y;
}

let sum3 = sum2(1051, 105);
console.log(sum3);

//* Arrow functions
const multiply = (x, y) => {
    return x * y;
}

let multiplySum = multiply(30, 4);
console.log(multiplySum)

//* Define square function
const square = x => {
    return x * x;
}

let sumSQ = square(8);
console.log(sumSQ);

//* Define square function another way
const square2 = x => x * x;

const sumSQ2 = square2(10);
console.log(sumSQ2);