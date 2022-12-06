//* Maps

// Map is a collection of key/value pairs.

const map = new Map();
console.log(map);

// Adding Values to a Map

map.set("firstName", "Syed Bakibillah");
map.set("lastName", "Sakib");
map.set("occupation", "Web Developer");

console.log(map);

const mapSame = new Map([
    ["firstName", "Syed Hadibillah"],
    ["lastName", "Nubair"],
    ["reletionship", "Son"]
]);

console.log(mapSame);

const nusair = {
    firstName: "Syed Radibillah",
    lastName: "Nusair",
    relationship: "Son",
}

const map3 = new Map(Object.entries(nusair));
console.log(map3);
// Map to an Object:
const obj = Object.fromEntries(map3);
console.log(obj);
// Map to an Array:
const arr = Array.from(map);
console.log(arr);

//* Map Keys

const map4 = new Map();
map4.set("1", "String one");
map4.set(1, "This will be overwritten");
map4.set(1, "Number one");
map4.set(true, "A Boolean");
console.log(map4);

// Initialize an object with a numerical key 
const obje = { 1: "One"};
// The key is actually a string
let result = obje[1] === obje["1"];
console.log("The Object key is actually a string :", result);

// Create an object 
const objAsKey = {name: "Sakib"};
const objAsKey2 = {
    [objAsKey]: "What will happen?"
}
console.log(objAsKey2);

// Set this object as the key of a Map
map.set(objAsKey, 'What will happen?');
console.log(map);

// In JavaScript {} === {} returns false, because the two Objects are not the same two Objects, despite having the same (empty) value

let check = {} === {};
console.log("Two objects are not the same: ", check);

// Add two unique but similar object as keys to a Map

map.set({}, "One");
map.set({}, "Two");
console.log(map);

// Add the same exact object twice as keys to a map
const objTwice = {};
map.set(objTwice, "One");
map.set(objTwice, "Two");
console.log(map);

//* Getting and Deleting Items from a Map

//Initializing a new Map
const map5 = new Map([
    ["animal", "Tiger"],
    ["shape", "Seven Sister"],
    ["city", "Mymensingh"],
    ["country", "Bangladesh"]
]);

// Check if a key exist in a Map
console.log(map5.has("shark"));
console.log(map5.has("shape"));

// Get an Item from a Map
console.log(map5.get("animal"));
console.log(map5.size);

// Delete an item from a Map by key
console.log(map5.delete("city"));

// Empty a Map = map4
console.log(map4.clear());

//* Keys, Values, and Entries for Maps

// keys()
console.log(map5.keys());

// values()
console.log(map5.values());

//entries()
console.log(map5.entries());

//* Iteration with Map

// Map
// Map.prototype.forEach((value, key, map) = () => {})

// Array
// Array.prototype.forEach((item, index, array) = () => {})

// Log the keys and values of the Map with forEach
map5.forEach((value, key) => {
    console.log(`${key}: ${value}`);
})

// Destructre the key and value out of the Map item 
for(const [key, value] of map5){
    // Log the keys and values of the Map with for..of

    console.log(`${key}: ${value}`);
}

//* Advantages of Map & Object

//* Map has
// 1. Size
// 2. Iteration
// 3. Flexibility
// 4. Ordered


//* Object has
// 1. JSON.parse()
// 2. JSON.stringify()

// Set
// A Set is a collection of unique values.

const set = new Set();
console.log(set);

set.add("Sakib");
set.add("Nubair");
set.add("Nusair");
set.add("Nusair");
console.log(set);

// Initialize a Set from an Array
const set1 = new Set(["Sakib", "Nubair", "Nusair", "Nusair"]);
console.log(set1);

const arr1 = [...set];
console.log(arr1);

// Delete an item
set1.delete("Nusair");
console.log(set1);

// Exist item
set1.has("Nusair");
console.log('Nusair not in list : ',set1);

// Clear a set
set1.clear();
console.log("Cleared :", set1);

// Size of a set
set1.size;
console.log(set1);

//* Keys, Values, and Entries for Sets
const set2 = new Set([1, 2, 3, 4, 5, 6]);

// Get the values of a set
set2.values();
console.log(set2);

//* Iteration with Set

// forEach() iteration:

const set3 = new Set(["hi", "hello", "good day"]);

// Iterate a Set with forEach
set3.forEach((value) => console.log("forEach :",value))
// console.log(set3);

// Iterate a Set with for..of :

for (const value of set2){
    console.log("For..of: ",value);
}

const uniqueArray = [ ...new Set([1, 1, 2, 2, 2, 2, 2, 3])]
console.log(uniqueArray);