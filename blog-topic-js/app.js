// Trick 1: Combining Multiple Objects
const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
};

const obj3 = {
  d: 4,
};

const objCombined = { ...obj1, ...obj2, ...obj3 };
console.log(objCombined);

// Trick 2: Inserting values in between an array
const arr = [0, 1, 2, 3, 5, 6, 7, 8];
console.log(arr);

// arr.splice(index, itemToDelete, item1ToAdd, item2ToAdd);

// not working
console.log(arr.splice(4, 0, 4));
console.log(arr.splice(4, 0, 100, 101, 102));

// Trick 3: Get the current timestamp
var date = new Date();
console.log(date.getTime());
var datePlus = +new Date();
var datePlus1 = Date.now();
console.log(datePlus);
console.log(datePlus1);

// Trick 4: Check if an object is an array
const obj4 = { data: 1 };
const arr1 = [1, 2, 3];
console.log(Array.isArray(obj4));
console.log(Array.isArray(arr1));

// Trick 5: Object destructuring

const user = {
  name: "Sakib",
  age: 31,
  profile: "https://github.com/sakibian",
  followers: 39,
  following: 297,
};

const { name, age, profile, followers, following } = user;

console.log(name);
console.log(age);
console.log(profile);
console.log(followers);
console.log(following);

// Trick 6: Rest parameter syntax
function sum(...values) {
  console.log(values);
}

sum(1);
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);
sum(1, 2, 3, 4, 5);

function sum2(...values) {
  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum;
}
console.log(sum2(1));
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3));
console.log(sum2(1, 2, 3, 4));
console.log(sum2(1, 2, 3, 4, 5));
