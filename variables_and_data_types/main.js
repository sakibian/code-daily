const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
};

// without variables
const buttonB = document.querySelector("#button_B");
const headingB = document.querySelector("#heading_B");

buttonB.onclick = () => {
  alert(`${prompt("What is your name?")}, nice to see you here!`);
  headingB.textContent = `Welcome ${prompt("What is your name sir?")}`;
};

// Let is non-hoisted
let myName = "Sakib";
let myAge = 30;
let myLocation = "Mymensingh";
let mybooks = "Quran";

console.log(myName);
console.log(myAge);
console.log(myLocation);
console.log(mybooks);

mySonName = "Nubair";
var mySecondSonName = "Nusair";
// console.log(mySonName, mySecondSonName);

function logName() {
  console.log(mySonName);
}

logName();

// Var is hoisted
var mySonName;

var name1 = "Nubair";
console.log("name1 Var - hoisted: ", name1);
var name1 = "Nusair";
console.log("name2 Var - hoisted: ", name1);

let name2 = "Nubair";
// Cannot redeclare block-scoped variable 'name2'
// let name2 = "Nusair";
// You'd have to do this instead:
name2 = "Nusair";
console.log("name2 Let - block-scoped :", name2);

// Updating a variable
let myName1 = "Sakib";
let myAge1 = 32;
console.log("Updating:", myName1, myAge1);
myName1 = "Bakibillah Sakib";
myAge1 = 33;
console.log("Updated: ", myName1, myAge1);

// Valid variables - examples

let myVariableUninitialize;
var myHoistedVariable = "hoisted variable decleared";
const shortVariable = "Constant variable decleared";

const addAllVariables = `UnInit: ${myVariableUninitialize}, Hoisted one is: ${myHoistedVariable}, Shortname variable: ${shortVariable}`;

console.log(addAllVariables);

// Variables types

// Numbers
let mySonAge = 3;
console.table(["Type: number: ", mySonAge]);

// string
let dolphinGoodby = "So long and thanks for all the fish";
console.table(["String: ", dolphinGoodby]);

// Booleans
const iAmAlive = true;
console.table(["Boolean: ", iAmAlive]);
let testBool = 6 < 3;
console.table(["Boolean Test: ", testBool]);

// Arrays
let myNameArray = ["Sakib", "Tuhfa", "Nubair", "Nusair"];
console.table(["A_Name: ", myNameArray]);
let myNumberArray = [10, 20, 25, 30];
console.table(["A_Number: ", myNumberArray]);

// Find index values
console.table(["Find index value: ", myNameArray[3], myNumberArray[2]]);

// Objects
let Allah = {
  name: "Rahman",
  otherNames: "Khaliq, Malik, Gaffar, Sattar ...",
};
console.table([Allah.name, Allah.otherNames]);

// Dynamic typing
let myString = "Hello";
console.table(["String: ", typeof myString]);
myString = "500";
console.table(["Still String: ", typeof myString]);
myString = 5000;
console.table(["This is number: ", typeof myString]);

// Constants in JavaScript

let count; // possible
// const count1; // Not possible - Missing initializer in const declaration
console.log("Empty variable: ", count);

let countOne = 1;
countOne = 2;
console.log("Reassigned: init: 1, Now:", countOne);

// Note that although a constant in JavaScript must always name the same value, you can change the content of the value that it names. This isn't a useful distinction for simple types like numbers or booleans, but consider an object:

const bird = { species: "Kestrel" };
console.log("Object name: ", bird.species);

// You can update, add, or remove properties of an object declared using const, because even though the content of the object has changed, the constant is still pointing to the same object:

bird.species = "Striated Caracara";
console.log("Object name changed:", bird.species);
