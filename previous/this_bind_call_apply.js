//* This, Bind, Call, Apply

// Implicit Context

// There are four main contexts in which the value of this can be implicitly inferred:

// 1. The global context
// 2. As a method within an object
// 3. As a constructor on a function or class
// 4. As a DOM event handler

//* Global Context

// The global context is would be window. When you’re working in Node.js, the global context is global.

// In stric mode printThis() function gets undefined
// 'use strict'

console.log(this);

function printThis() {
    console.log(this);
}

printThis();

//* An Object Method

const bangladesh = {
    name: "The Royal Bengal Tiger - Bangladesh",
    yearFounded: 1971,
    details: {
        symbol: 'Tiger',
        currency: "BDT",
        printDetails () {
            console.log(`The symbol is the ${this.symbol} and the currency is ${this.currency}.`);
        }
    },

    describe() {
        console.log(`${this.name} was founded on ${this.yearFounded}.`);
    }
}

bangladesh.describe();
bangladesh.details.printDetails();


//* A Function Constructor
function futureCompany(name, yearFounded){
    this.name = name,
    this.yearFounded = yearFounded

    this.describe = function() {
        console.log(`${this.name} was founded in ${this.yearFounded}.`);
    }
}

const sakibian = new futureCompany("Sakibian team", 2009);

sakibian.describe();

//* A Class Constructor

class Country {
    constructor(name, yearFounded){
        this.name = name,
        this.yearFounded = yearFounded
    }

    describe(){
        console.log(`${this.name} was founded in ${this.yearfounded}.`);
    }
}

const myBangladesh = new Country("The Royal Bengal Tiger - Bangladesh", 1971);

// Bug available in year(1971 - undefined) - why it is not showing it's not clear to me, it might be the cause of other functions in this file.

myBangladesh.describe();

//* A DOM Event Handler

const button = document.createElement("button");
button.textContent = "Click Me";
document.body.append(button);

button.addEventListener('click', function(event){
    console.log(this);
});

// Call and Apply
const book = {
    title: "Brave New World",
    author: "Aldous Huxley"
};

function summary(){
    console.log(`${this.title} was written by ${this.author}.`);
}

summary();

summary.call(book);
// or:
summary.apply(book);

// Differences between call and apply
function longerSummary(genre, year){
    console.log(`${this.title} was written by ${this.author}. It is a ${this.genre} novel written in ${this.year}`);
}

// Error - Bug - undefined

longerSummary.call(book, ["dystopian", 1932]);
longerSummary.apply(book, ["dystopian", 1932]);

// Bind
const braveNewWorldSummary = summary.bind(book);
// It's in variable why is this variable getting called like function? Needs to understand this concept 
braveNewWorldSummary();

const book2 = {
    title: '1984',
    author: 'George Orwell'
}

braveNewWorldSummary.bind(book2);
braveNewWorldSummary();

//* Arrow Function

const whoAmI = {
    name: "Syed Bakibillah Sakib",
    regularFunction: function() {
        console.log(this.name);
    },
    arrowFunction: () => {
        console.log(this.name);
    }
}

whoAmI.regularFunction();
whoAmI.arrowFunction();

const button2 = document.createElement("button");
button2.textContent = "My Button";
document.body.append(button2);

class Display{
    constructor() {
        this.buttonText = "It's now your button";

        button2.addEventListener('click', event => {
            event.target.textContent = this.buttonText;
        })
    }
}

new Display();