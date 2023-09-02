let fish = ["piranha", "barracuda", "koi", "eel"];

// isArray();
let f = Array.isArray(fish);
console.log(f);

// pop();
let p = fish.pop();
console.log(p);

// Check how many left now.
console.log(fish);

// shift();
fish.push("eel");
console.log(fish);

let s = fish.shift();
console.log(s);
console.log(fish);

// push();
let pu = fish.push("swordfish");
console.log(pu);
console.log(fish);

// unshift();
let u = fish.unshift("shark");
console.log(u);
console.log(fish);

// splice();

// splice() takes three parameters

// splice(index number, number of items to remove, items to add)

// Adding with splice()
let splice = fish.splice(0, 0, "Add");
console.log(splice);
console.log(fish);

// Removing with splice()
let rmv = fish.splice(1, 1);
console.log(rmv);
console.log(fish);

// Adding and Removing with splice()
let ar = fish.splice(1, 2, "New");
console.log(ar);
console.log(fish);

// reverse()
let rev = fish.reverse();
console.log(rev);

// fill()
let fillup = fish.fill("fill-up");
let fillup2 = fish.fill("replaced-w", 1, 4);
console.log(fillup);
console.log(fillup2);

// sort()
let fish2 = ["piranha", "barracuda", "Koi", "eel"]
let sor = fish2.sort();
console.log(sor);

// Number sort
 let number = [42, 23, 16, 15, 4, 8];
 number.sort();
 console.log(number);

// In order to sort numbers properly, you could create a comparison function as an argument.

const sortNumerically = (a, b) => {
    return a - b;
}
number.sort(sortNumerically);
console.log(number);


//indexOf -- This a part of accessor method
// let i = fish.indexOf("swordfish");
// console.log(i);