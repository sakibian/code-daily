// Understanding Arrow Functions

// Regular function
var regular = function() {
    console.log("Do something with Regular function");
}
regular();

// JS Latest version produces new way
const arrowF = () => {
    console.log("Do something with Arrow function");
}

arrowF();

// If there is one parameter
const arrowFun = parameter1 => {
    parameter1 = "Param One";
    console.log(parameter1);
}

arrowFun(1);

// forEach()
let fish = ["piranha", "barracuda", "cod", "eel"];

fish.forEach(singleFish => {
    console.log('forEach - ', singleFish);
})

// Another way to do this is using the for loop keyword and testing it against the length property of the array.

// Loop through
for(let i = 0; i < fish.length; i++) {
    console.log('Loop - ' + fish[i]);
}

// map()
// Print each item in the array - work same as forEach

let printFish = fish.map(singleFish => {
    console.log('map - ',singleFish);
});

// Change values on each item of array
let pluralFish = fish.map(singleFish => {
    return `Added S - ${singleFish}s`;
})
console.log(pluralFish);

// filter()
let seaCreatures = ["shark", "whale", "squid", "starfish", "narwhal"];

// ??????
// filter() is an iteration method, and does not mutate the original array.
seaCreatures.push("sakib");
console.log(seaCreatures);
// It's mutating with push.
// ??????

// Fillter all creatures that start with s into a new list
let filteredList = seaCreatures.filter(creature => {
        return creature[0] === "s";
});
console.log('Filtered - S ',filteredList);

// reduce()
let numbers = [42, 23, 16, 15, 4, 8];
// Get the sum of all numerical values
let sum = numbers.reduce((a, b) => {
    return a + b;
});

console.log("reduce() - sum = " + sum);

// find()
let seaCreatures1 = [ "whale", "octopus", "shark", "cuttlefish", "flounder" ];

// Check if a given value is a cephalopod
const isCephalopod = cephalopod => {
    return ["cuttlefish", "octopus"].includes(cephalopod);
}
console.log(seaCreatures1.find(isCephalopod));

// findIndex()
// Using the isCephalopod test
console.log(seaCreatures1.findIndex(isCephalopod));

const isThereEel = eel => {
    return ["eel"].includes(eel);
}

console.log(seaCreatures1.findIndex(isThereEel));