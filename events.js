// const changeText = () => {
//     const para = document.querySelector('.event-p');

//     para.textContent = "I've changed the text using arrow function and event handler"
// }

// const button = document.querySelector("#event-button");

// button.onclick = changeText;


const p = document.querySelector(".event-p");
const button = document.querySelector("#event-button");

const changeText = () => {
    p.textContent = "I changed because of an event listener."
}

const alertText = () => {
    alert("Will I alert?");
}

// Events can be overwritten

// button.onclick = changeText;
// button.onclick = alertText;
button.addEventListener('click', changeText);
// button.addEventListener('click', alertText);

// An anonymous function on an event listener
button.addEventListener('click', () => {
    p.textContent = "An anonymous function on an event listener";
});
// Test the key and code properties
// X Not running anything
let keydown = document.addEventListener('keydown', event => {
    console.log('key:' + event.key);
    console.log('code:' + event.code);
});

console.log(keydown);