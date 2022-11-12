// DATATYPE

let t = 16; // Number
// let t = "Sakib"; // String
// let t = true; // Boolean
// let t; // Undefined

// Integer and Float-point number are same
let num1 = 92;
let num2 = 92.00;

let num3 = 987e8;
console.log(num3);
let num4 = 987e-8;
console.log(num4);

let num5 = 99999999999999;
console.log(num5);
let num6 = 9999999999999999;
console.log(num6);

let num7 = 5 / 0;
console.log(num7);
let num8 = -5 / 0;
console.log(num8);

// Did Not Understand
// while (num9 != Infinity) {
//    
// } 

let x = 20 / "Shark";
console.log(x);

let y = 20 / "5";
console.log(y);

let a = NaN;
let b = 37;
let c = a + b;
console.log(c);

//Strings
let singleQ = 'This is in single quotes';
let doubleQ = "This is in double quotes";
console.log(singleQ);
console.log(doubleQ);

let hw = "Hello, World!";

function helloFunction() {
    alert(hw);
}

// Boolean

//Greater than
let greaterThan = 500 > 100;
console.log(greaterThan);

//Less than
let lessThan = 1 > 5;
console.log(lessThan);

// Equal
let eQual = 5 == 5;
console.log(eQual);
let eQual2 = 500 == 400;
console.log(eQual2);

// Arrays
let fishName = ["Shark", "cuttlefish", "Clownfish", "eel"];
console.log(fishName);

// Objects

let sakib = {
    firstName: "Bakibillah",
    lastName: "Sakib",
    color: "blue",
    location: "Ocean"
}

console.log(sakib);

// Working with Multiple Data Types

let o = "Ocean" + 5 + 3;
console.log(o);