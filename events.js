// * # Event handlers
// * # Event listeners
// * # Event Objects

// Event handlers and Event Listeners
// Button and a presses key event fire called click event or keypress event

// An "Event Handler" is a JavaScript function that runs when an "Event fires"

// An "Event Listener" attaches a responsive interface to an element, which allows that particular element to wait and "Listen" for the given "Event to fire"


// ## 3 ##
// There are three ways to assign "Events" to elements


// ## 1 ## - Inline event handlers
// ## 2 ## - Event handler properties
// ## 3 ## - Event listeners


// * Inline event handler attributes

// Function to modify the text content of the paragraph

const changeText = () => {
    const p = document.querySelector("p");
    p.textContent = "I changed because of an inline event handler.";
}


// * Event Handler Properties
const changeText2 = () => {
    const p = document.querySelector("p");
    p.textContent = "I changed because of an Event Handler Property. [Button is accessed in this case]";
}
// Add event handler as a property of the button element.
const button = document.querySelector('button');
button.onclick = changeText2;

// Events can be overwritten
const p = document.querySelector("p");
const button2 = document.querySelector('button');

const changeText3 = () => {
    p.textContent = "Will I change?";
}

const alertText = () => {
    alert("Will I alert?");
}

// Example - Events can be overwritten 
button2.onclick = changeText3;
button2.onclick = alertText;


// * Event Listeners

// addEventListener()
// * addEventListener() takes two mandatory parameters
// * The event it is to be listening for
// * The listener callback function

// Function to modify the text content of the paragraph

const changeText4 = () => {
    const p = document.querySelector("p");
    p.textContent = "I changed because of an event listener";
}

// * Listen for click event

// * I know I'm accessing single button with multiple name (button1, button2, button3) it's because I get to type the code again and it's making impact on my brain.

const button3 = document.querySelector('button');
button3.addEventListener('click', changeText4);

// Multiple listeners can be added to the same event and element
button3.addEventListener('click', changeText3);
button3.addEventListener('click', alertText);

// Often, anonymous functions are used.
button3.addEventListener('click', () => {
    p.textContent = "Often, anonymous functions will be used instead of a function reference on an event listener. Anonymous functions are functions that are not named.";
});

// removeEventListener() - function to remove one or all events from an element

// Remove alert function from button element
button3.removeEventListener('click', alertText);

// * Common Events

// * Mouse Events

// click - dblclick - mouseenter - mouseleave - mousemove - mouseup - mousedown

// --------------------------- //
// Using "mouseenter" and "mouseleave" in tandem recreates a hover effect that lasts as long as a mouse pointer is on the element.
// --------------------------- //

// * Form Events

// submit - focus - blur

// * Keyboard Events

// keydown - keyup - keypress

// document.addEventListener('keydown', event => {
//     console.log('key: ' + event.key);
//     console.log('code: ' + event.code);
// });

// * Keydown
const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('keydown', logKey);

function logKey(e) {
    log.textContent += `${e.key}.${e.code} `;
}

// https://developer.mozilla.org/en-US/docs/Web/Events

// * Event Objects

// Pass ab event through to a listener
input.addEventListener('keydown', event => {
    var element = document.querySelector(".emptyP");
    
    // Set variables for keydown codes
    var a = 'KeyA';
    var s = 'KeyS';
    var d = 'KeyD';
    var w = 'KeyW';

    // Set a direction for each code
    switch(event.code) {
        case a:
            element.textContent = 'Left';
            break;
        
        case s:
            element.textContent = 'Down';
            break;
        
        case d:
            element.textContent = 'Right';
            break;
        
        case w:
            element.textContent = 'Up';
            break;
        
    }
});


// event.target

const section = document.querySelector('section');

// Print the selected target
section.addEventListener('click', event => {
   console.log(event.target);
});
