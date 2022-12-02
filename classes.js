//* Classes are functions

// Initializing a function with a function expression
const x = function(){}
console.log(x);

// Initializing a class with a class expression
const y = class {}
console.log(y);

let xPrototype = Object.getPrototypeOf(x);
console.log(xPrototype);
let yPrototype = Object.getPrototypeOf(y);
console.log(yPrototype);

// Initialize a constructor from a function
const constructorFromFunction = new x();
console.log(constructorFromFunction);

// Initialize a constructor from a class
const constructorFromClass = new y();
console.log(constructorFromClass);

//* Defining a Class
// Initializing a constructor function
function Hero(name, level){
    this.name = name;
    this.level = level;
}

// Initializing a class definition
class HeroC {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
    return `${this.name} says hello from constructor function.`
}

class HeroCD {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} say hello from class Constructor.`
    }
}

const hero1 = new HeroCD("Nubair", 1);
console.log(hero1);

//* Extending a Class

// Create a new constructor from the parent
function Mage(name, level, spell){
    // Chain constructor with call
    Hero.call(this, name, level);

    this.spell = spell;
}

const hero2 = new Mage('Nusair', 2, "Magic wand");
console.log(hero2);

// Creating a new class from the parent
class MageC extends Hero {
    constructor(name, level, spell) {
        // Chain constructor with super - Replaced call
        super(name, level);

        // Add a new property
        this.spell = spell;
    }
}

const hero22 = new MageC("Nusair", 2, "Missile");
console.log(hero22);

/*----------------Final------------------ */

//* Constructor

function MyHero(name, level){
    this.name = name;
    this.level = level;
}
// Adding a method to the constructor
MyHero.prototype.greet = function(){
    return `${this.name} says Hello from Constructor`
};

// Creating a new constructor from the parent
function MyMage(name, level, spell) {
    // Chain constructor with call
    MyHero.call(this, name, level);

    this.spell = spell;
}


//* Class Constructor

// Initialize a class
class MyClassHero {
    constructor(name, level){
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says Hello from Class Contructor`;
    }
}
// Creating a new class from the parent
class MyClassMage extends MyClassHero {
    constructor(name, level, spell){
        // Chain constructor with super
        super(name, level);

        // Add a new property
        this.spell = spell;
    }
}
// Constructor
const heroConstructor = new MyMage("Nubair", 1, "Magic Knife");
console.log(heroConstructor);

// Class Constructor
const heroClassConstructor = new MyClassMage("Nusair", 2, "Magic Bomb");
console.log(heroClassConstructor);

