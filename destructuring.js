//* Destructuring, Rest Parameters, and Spread Syntax

//* Object Destructuring

const note = {
    id: 1,
    title: 'my first note',
    date: '04/05/1990',
    author: {
        firstName: "Sherlock",
        lastName: "Holmes",
     },
     tags: ["personal", "writing", "investigations"]
}

// Create variables from the Object properties
// const id = note.id;
// const title = note.title;
// const date = note.date;

// Destructure properties into variables
// const { id, title, date } = note;
// const { id: noteId, title, date } = note;

// console.log(id);
// console.log(title);
// console.log(date);

// console.log(note);
// console.log(noteId);

// const { 
//     id, 
//     title, 
//     date,
//     author: { firstName, lastName },
// } = note;
// console.log(`${firstName} ${lastName}`);

// Access object and nested values
// const { 
//     author,
//     author: { firstName, lastName },
// } = note;

// console.log(author);

// const { length } = 'A string';
// console.log(length);

//* Array Destructuring

const dateArray = ["1990", "05", "04"];

// Create variables from the Array items.

// const year = dateArray[0];
// console.log(year);
// const month = dateArray[1];
// console.log(month);
// const day = dateArray[2];
// console.log(day);

// Destructure Array values into variables

// const [year, month, day] = dateArray;
// console.log(year);
// console.log(month);
// console.log(day);


// Skip the second item in the array
const [year, , day] = dateArray;
console.log(year);
console.log(day);

// Create a nested array
const nestedArray = [1, 2, [3, 4], 5];
console.log(nestedArray);

// Destructure nested items
const [one, two, [three, four], five] = nestedArray;
console.log(one, two, three, four, five);

// Destructure the keys and values out of Object.entries()

// Using forEach()
Object.entries(note).forEach(([key, value]) => {
    console.log(`forEach: ${key}: ${value}`);
});

// Using a for loop
for (let [key, value] of Object.entries(note)) {
    console.log(`for..loop: ${key}: ${value}`);
}

const { 
    title,
    date = new Date(),
    author: { firstName },
    tags: [personalTag, writingTag]
} = note;

console.log("Hello date", date);

//* Spread
// Spread with Arrays

// Create an Array
const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']

// Concatenate tools and otherTools together
const allTools = tools.concat(otherTools);
console.log("Concatenate tools: ", allTools);
// Unpack the tools Array into the allTools Array
const allToolsTwo = [...tools, ...otherTools];
console.log("Spread tools: ", allToolsTwo);

// Array of users
const users = [
    {id: 1, name: "Nubair"},
    {id: 2, name: "Nusair"},
]
// console.log("Users: 2 -> ",users);

// A new user to be added 
const newUser = {id: 3, name: "Sakib"}
// users.push(newUser);
// console.log("Users: 3 -> ",users);

// Using spread in this case
const updatedUsers = [...users, newUser];
console.log(users)
console.log(updatedUsers)

// Create an Array
const originalArray = ['one', 'two', 'three'];
// console.log(originalArray);

// Assign array to another variable
const secondArray = originalArray;

// Use spread to make a shallow copy
const secondArray1 = [...originalArray];

// Remove the last item of the second Array
// secondArray.pop();
secondArray1.pop();
// console.log(secondArray);
console.log(originalArray);

// Search on chapter: If you write the same example code but copy