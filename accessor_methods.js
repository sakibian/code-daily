// concat()

// Create arrays of monovelves and bivalves
let monovelves = ["abalone", "conch"];
let bivalves = ["oyster", "mussel", "clam"];

// Conctenate them together into shellfish variable
let shellfish = monovelves.concat(bivalves);
console.log(shellfish);

// join()

// let fish = ["piranha", "dolphin", "barracuda", "koi", "eel"];
let fish = ["piranha", "barracuda", "koi", "barracuda"];

// Join the element of an array into a string
let fishString = fish.join();
console.log(fishString);

// Join the element of an array into a string 
let fishString2 = fish.join(", ");
console.log(fishString2);

// slice()

// 4 is unncessary as second argument.
let fishWithShortNames = fish.slice(2, 4);
console.log(fishWithShortNames);

// Solid method
// Slice a new array from 2 to the end of the array
let fishWithShortNames2 = fish.slice(2);
console.log(fishWithShortNames2);

// indexOf();

let i = fish.indexOf("barracuda");
console.log(i);

// Record not exist means -1
let yi = fish.indexOf("shark");
console.log(yi);

// lastIndexOf();
console.log(fish);

let iy = fish.lastIndexOf("barracuda");
console.log(iy);



