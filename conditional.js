//* IF - Statement

// Set balance and price of item
const balance = 500;
const jeans = 40;

// check if there are enough funds to purchase item
if(jeans <= balance){
    console.log("You have enough balance to purchase more.");
}

//* Else - Statement
const phone = 600;

if(phone <= balance) {
    console.log("You have enough money to purchase more.");
} else {
    console.log("You don't have enough money to purchase more.");
}

//* Else if Statement - evaluate more than two possible outcomes

// Set the current grade of the student
let grade = 89;

// Check if grade is an A, B, C, D, or F
if(grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else if (grade >= 60) {
    console.log("D");
} else {
    console.log("F");
}


//* Ternary Operator

//Set age of user
let age = 20;

// Place result of ternary operation in a variable
const oldEnough = (age >= 21) ? "You can enter" : "Nope you can't enter.";

console.log(oldEnough);