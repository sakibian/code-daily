//* Generator Functions

// Generator function declaration
function* generatorFunction() {};

// Generator function expression
const generatorFunction2 = function*() {};
console.log("Generator function expression: ", generatorFunction2);

// Generator as the method of an Object
const generatorObj = {
    *generatorMethod(){}
}
console.log("Generator as the method of an Object: ", generatorObj);

// Generator as the method of a class
class GeneratorClass {
    *generatorMethod(){}
}
// console.log("Generator as the method of a class: ");

//* Generator Objects

// A regular function that sum two values
function sum(a, b) {
    return a + b;
}

let seeSum = sum(5,6) // 11

console.log(seeSum);

function* generatorFunction3() {
    return "Hello, Generator!";
}

// Assign the Generator object to generator
const generator = generatorFunction3();
console.log(generator);

const next = generator.next();
console.log(next);
console.log(generator);

//* yield Operators

// Create a generator function with multiple yields
function* generatorFunction4() {
    yield "Sakib"
    yield "Nubair's Mom"
    yield "Nubair"
    yield "Nusair"

    return "The Family"
}
const generator1 = generatorFunction4();
// let next1 = generator1.next();
// let next2 = generator1.next();
// let next3 = generator1.next();
// let next4 = generator1.next();
// let next5 = generator1.next();
// console.log(next1);
// console.log(next2);
// console.log(next3);
// console.log(next4);
// console.log(next5);

//* Iterating Over a Generator

// Iterate over Generator object

// for(const value of generator1){
//     console.log(value);
// }

// Create an array from the values of a Generator object -- spread operator
const values = [...generator1];
console.log(values);

//* Closing a Generator

function* generatorFunction5(){
    yield "Mother"
    yield "Nubair - son "
    yield "Nusair - son"
}

const generator2 = generatorFunction5();
console.log(generator2);

let next6 = generator2.next();
console.log(next6);

let return7 = generator2.return("There is no spoon");
console.log(return7);

let next7 = generator2.next();
console.log(next7);

//* try...catch 

// Define a generator function with a try...catch
function* generatorFunction6(){
    try {
        yield "Nubair"
        yield "Nusair"
    } catch (error) {
        console.log(error);
    }
}

const generator3 = generatorFunction6();
let next8 = generator3.next();
console.log(next8);

let next9 = generator3.throw(new Error("Agent Sakib"));
console.log(next9);

// Generator Object Methods and States
// Methods: next() - return() - throw()
// States: suspended - closed 

//* yield Delegation

// Generator function that will be delegated to
function* delegate(){
    yield 3
    yield 4
}

// Outer generator function 
function* begin() {
    yield 1
    yield 2
    yield* delegate()
}

// Iterate through the outer generator
const generator4 = begin();

for(const value of generator4) {
    console.log(value);
}

//* Infinite Data Streams
function* incrementer() {
    let i = 0;

    while(true) {
        yield i++
    }
}

// Initiate the generator
const counter = incrementer();
let C1 = counter.next();
console.log(C1);
let C2 = counter.next();
console.log(C2);
let C3 = counter.next();
console.log(C3);
let C4 = counter.next();
console.log(C4);


// Create a fibonacci generator function
function* fibonacci() {
    let prev = 0
    let next = 1

    yield prev
    yield next

    // Add previous and next values and yield them forever
    while(true) {
        const newVal = next + prev
        yield newVal

        prev = next
        next = newVal
    }
}

const fib = fibonacci();

for(let i = 0; i < 20; i++){
    console.log(fib.next().value)
}

// Passing Values in Generators
function* generatorFunction7() {
    console.log(yield)
    console.log(yield)

    return "The end"
}

const generator5 = generatorFunction7();
generator5.next();
generator5.next(100);
generator5.next(200);

// Seed the value
function* generatorFunction8(value) {
    while(true) {
        value = yield value * 10
    }
}

// Initialize a generator and seed it with an initial value
const generator6 = generatorFunction8(0);
for (let i = 0; i < 5; i++) {
    console.log(generator6.next(i).value);
}

// async/await with Generators

// Asynchronous function 
const getUsers = async function() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();

    return json;
}
// Call the getUsers function and log the response
getUsers().then(response => console.log(response));

// Another way
const getUsersAlt = asyncAlt(function*(){
    const response = yield fetch("https://jsonplaceholder.typicode.com/users");
    const json = yield response.json();

    return json;
})

// Invoking the function
getUsersAlt().then(response => console.log(response));

// Define a function named asyncAlt that takes a generator function as an argument

function asyncAlt(generatorFunction) {
    // Return a function
    return function() {
        // Create and assign the generator object
        const generator = generatorFunction();

        // Define a function that accepts the next iteration of the generator
        function resolve(next){
            // If the generator is closed and there are no more values to yield,
            //resolve the last value
            if(next.done) {
                return Promise.resolve(next.value)
            }

            // If there are still values to yield they are promises and must be resolved.
            return Promise
            .resolve(next.value).then(response => {
                return resolve(generator.next(response))
            })
        }

        // Begin resolving promises
        return resolve(generator.next());

    }
}
