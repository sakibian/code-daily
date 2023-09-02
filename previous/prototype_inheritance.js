//* JavaScript Prototypes

let x = {};
console.log("Empty init: ", x);

let xAnotherWay = new Object();
console.log("Call new object: ",xAnotherWay);

let findOut = Object.getPrototypeOf(x);
console.log(findOut);

let seeProto = x.__proto__;
console.log(seeProto);

// Prototype Inheritance
let seeInherit = x.toString();
console.log(seeInherit);

let getNullPrototype = x.__proto__.__proto__;
console.log(getNullPrototype);

let y = [];
console.log(y);

let seeYProto = y.__proto__;
console.log(seeYProto);

// Chain two prototypes together now
// It looks like = y -> Array -> Object.
let seeYAnotherW = y.__proto__.__proto__;
console.log(seeYAnotherW);

// This chain is now referring to Object.prototype
// y -> Array -> Object === Object -> Object
let y1 = y.__proto__ === Array.prototype;
console.log(y1);
let y2 = y.__proto__.__proto__ === Object.prototype;
console.log(y2);

let y3 = Array.prototype.isPrototypeOf(y);
console.log(y3);
let y4 = Object.prototype.isPrototypeOf(Array);
console.log(y4);
let y5 = y instanceof Array;
console.log(y5);

//** Constructor Function
// Story:  A user can select a character and then choose what character class they will have, such as warrior, healer, thief, and so on.

// Since each character will share many characteristics, such as having a name, a level, and hit points, it makes sense to create a constructor as a template. However, since each character class may have vastly different abilities, we want to make sure each character only has access to their own abilities.

// To begin, a constructor function is just a regular function. It becomes a constructor when it is called on by an instance with the new keyword. In JavaScript, we capitalize the first letter of a constructor function by convention.

// Initialize a constructor function for a new Hero
function Hero(name, level) {
    this.name = name;
    this.level = level;
}

let hero1 = new Hero("Nubair", 1);
console.log(hero1);

let seeHeroProto = Object.getPrototypeOf(hero1);
console.log(seeHeroProto);

// Add A method
// Add greet method to the Hero prototype
Hero.prototype.greet = function() {
    return `${this.name} says Hello.`;
}

let callHero1 = hero1.greet();
console.log(callHero1);

// Story: We can use the call() method to copy over properties from one constructor into another constructor. Let’s create a Warrior and a Healer constructor.

// Initialize Warrior constructor
function Warrior(name, level, weapon){
    // Chain constructor with call
    Hero.call(this, name, level);
    // Add a new property
    this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell){
    Hero.call(this, name, level);
    // Add a new property
    this.spell = spell;
}

// Story: Both new constructors now have the properties of Hero and a few unqiue ones. We’ll add the attack() method to Warrior, and the heal() method to Healer.

Warrior.prototype.attack = function() {
    return `${this.name} attack with the ${this.weapon}.`;
}

Healer.prototype.heal = function(){
    return `${this.name} casts ${this.spell}.`;
}

const hero2 = new Warrior("Nubair", 1, "axe"); 
const hero3 = new Healer("Nusair", 1, "cure");
console.log(hero2);
console.log(hero3);

// But what happens if we try to use methods further down the prototype chain?

// let furtherDown = hero2.greet();
// console.log(furtherDown);

// Prototype properties and methods are not automatically linked when you use call() to chain constructors. We will use Object.setPropertyOf() to link the properties in the Hero constructor to the Warrior and Healer constructors, making sure to put it before any additional methods.

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// All other prototype methods added below

// Now we can successfully use prototype methods from Hero on an instance of a Warrior or Healer.

// console.log(hero1.greet());
console.log(hero2.greet());
console.log(hero3.greet());

