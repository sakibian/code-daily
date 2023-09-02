//* While loop
// Set population limit of aquarium to 10
const popLimit = 10;

// start off with 0 fish
let fish = 0;

// Initiate while loop to run until fish reaches population limit 
while (fish < popLimit) {
    // add one fish for each iteration 
    fish++;
    console.log("There's a room for " + (popLimit - fish) + " more fish.");
}

//* Inifinte Loop
// set a condition to true
const iceCapsAreMelting = true;
let polarBears = 5;

while(iceCapsAreMelting) {
    console.log(`There are ${polarBears} polar bears.`);
    polarBears--;
    // Terminate infinite loop when following condition is true
    if(polarBears === 0) {
        console.log("There are no polar bears left. Shob Khotom :)");
        break;
    }
}

//* Do...While Loop
 
// set the variable to 0
let x = 10;

do {
    //Increament variable by 1
    x++; // 11
    x = x * x; // Multiply by 11 
    console.log(x);
} while (false);

// For statements also include extra features such as a loop counter

//* For Loop

// for (initialization; condition; final expression) { --- }

for(let i = 0; i <= 20; i++) {
    // Result 21 count, including 0;
    console.log("For loop - " + i);
}

// Set initial variable to 0
let i = 0;
console.log("Manually increment variable by 1 four times ", i++);
console.log("Manually increment variable by 1 four times ", i++);
console.log("Manually increment variable by 1 four times ", i++);
console.log("Manually increment variable by 1 four times ", i++);

// Initialization 
let J = 0;

// Condition

J < 10

// Final Expression
J++

// Putting it Together 
for (var ai = 0; ai < 10; ai++) {
    console.log("Another For Loop: ", ai);
}

// Optional Expressions 1

// Declare variable outside the loop
let si = 0;

// Initialize the loop
for (; si < 5; si++) {
    console.log("Optional Expressions: ", si);
}

// Optional Expressions 2
let op = 0;
for(; ; op++){
    if(op > 3) {
        break;
    }
    console.log("Optional Exp2 : ",op);
}

// Optional Expressions 3

// Why is it counting infinte?

// let op3 = 0;
// for(; ;) {
//     if(op3 > 2) {
//         break;
//     }
//     console.log("Optional Exp 3",op3);
//     i++;
// }

//* Modifying an Array

// We can use for loops to modify an array.

// Initialize empty array
let arrayExample = [];

// Initialize loop to run 3 times
for (let i = 0; i < 10; i++) {
    arrayExample.push(i);
    console.log(arrayExample)
}

//* Length of an Array

let fishList = ["Katol", "Ilish", "Rui", "Shing", "Shutki"];

// Length of array
for(let i = 0; i < fishList.length; i++) {
    // Print each item
    console.log(fishList[i]);
}

// Why this one looping infinte time?

// Initialize loop to Length times
// for (let i = 0; fishList.length; i++) {
//     arrayExample.push(i);
//     console.log(arrayExample);
// }

//* For..In Loop 
const shark = {
    "species": "Great white",
    "color": "white",
    "numberOfTeeth": Infinity
}

// Print property names of object 
for(attribute in shark) {
    console.log("Property name of Object: ",attribute);
}

// Print property value of object 
for(attribute in shark) {
    console.log("Property values of Object :",shark[attribute]);
}
// Print property name & value at the same time.
for(attribute in shark) {
    console.log("Name: ", attribute, "Value: ", shark[attribute]);
}

for(attribute in shark) {
    console.log(`${attribute}`.toUpperCase() + `: ${shark[attribute]}`);
}

// Initialize array of shark species
let sharks = ["great white", "tiger", "hammerhead"];

// Print out each type of shark 
for (let shark of sharks) {
    console.log(shark);
}

// Loop through both index and element
for (let [index, shark] of sharks.entries()) {
    console.log(index, shark);
}

// Assign string to a variable 
let sharkString = "sharks"

// Iterate through each index in the string
for (let shark of sharkString) {
    console.log(shark);
}