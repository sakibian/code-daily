// Assignment (=)
let x = 2;
let y = 3;

console.log(x);
console.log(y);
console.log((x = y + 1));
console.log((x = x * y));
let yy = 5;
let xx = (yy = 5);
console.log(xx);
console.log(yy);
// // This is equivalent to:
xx = yy = 5;
console.log(xx);

const xxx = 5,
  yyy = 5;
console.log(xxx);

// Simple assignment and chaining
let x1 = 5;
let y1 = 10;
let z1 = 25;
console.log(x1); // 5

x1 = y1;
console.log(x1); // 10
x1 = y1 = z1;
console.log(x1); // 25

// Value of assignment expressions

let x2;
console.log(x2); // undefined
console.log((x2 = 2)); // 2
console.log(x2); // 2

// Unqualified identifier assignment
function foo() {
  String("s");
}
// foo();

foo = "f";
Object.hasOwn(globalThis, "foo");
console.log(Object.hasOwn(globalThis, "foo"));

// Assignment with destructuring
const result = /(a+)(b+)(c+)/.exec("aaabccc");
console.log(result);
let a = "",
  b = "",
  c = "";
[, a, b, c] = result;

console.log(a, b, c);

// addition assignment (+=)

let a1 = 2;
let b1 = "hello";
console.log((a1 += 3));
console.log((b1 += " world"));

// Using addition assignment

let baz = true;

// Boolean + Number -> addition
baz += 1;

console.log(baz);

// Assigning to properties

// If an expression evaluates to an object, then the left - hand side of an assignment expression may make assignments to properties of that expression.For example:

const obj = {};

obj.x = 3;

console.log(obj.x);
console.log(obj);

const key = "y";
obj[key] = 5;
console.log(obj[key]);
console.log(obj);

// If an expression does not evaluate to an object, then assignments to properties of that expression do not assign:

const val = 0;
val.x = 3;
console.log(val.x);
console.log(val);

// Destructuring

const foo1 = ["one", "two", "three"];

const one = foo1[0];
const two = foo1[1];
const three = foo1[2];
console.log(foo1, one, two, three);
const [four, five, six] = foo1;
console.log(foo1);

// Evaluation and nesting

function f() {
  return 0;
}

function g() {
  return 1;
}

let xFunction = f(); // init result 0;
console.log(xFunction);
xFunction = g(); // reassigned() result 1
console.log(xFunction);

let x3;
const y2 = (x3 = f()); // == const y2 = x3 = f();
console.log(y2); // Logs the return value of the assignment x = f().
console.log((x3 = f())); // Logs the return value directly.

// Comparison operators

const var1 = 3;
const var2 = 4;

let equal = var1 == var2;
console.log("== :", equal);

let notEqual = var1 != var2;
console.log("!= :", notEqual);

let strictEqual = var1 === var2;
console.log("=== :", strictEqual);

let strictNotEqual = var1 !== var2;
console.log("!== :", strictNotEqual);

let greaterThen = var1 > var2;
console.log("> :", greaterThen);

let greaterThenOrEqual = var1 >= var2;
console.log(">= :", greaterThenOrEqual);

let lessThen = var1 < var2;
console.log("< :", lessThen);

let lessThenOrEqual = var1 <= var2;
console.log("<= :", lessThenOrEqual);

// Arithmetic operators

let divide = 1 / 2;
console.log(divide);
let equalA = 1 / 2 === 1.0 / 2.0;
console.log(equalA);

// Bitwise operators
let aBit = 10;
let bBit = 20;

let bAND = aBit & bBit;
console.log("Bitwise AND: ", bAND);
let bOR = aBit & bBit;
console.log("Bitwise OR: ", bOR);

let bXOR = aBit ^ bBit;
console.log("Bitwise XOR: ", bXOR);

let bNOT = ~aBit;
console.log("Bitwise NOT: ", bNOT);

let leftShift = aBit << bBit;
console.log("Bitwise Left Shift: ", leftShift);

let rightShift = aBit >> bBit;
console.log("Bitwise right Shift: ", rightShift);

let zeroRightShift = aBit >>> bBit;
console.log("Bitwise Zero Right Shift: ", zeroRightShift);

// Logical operators: example 1

let logicalA = true;
let logicalB = false;

const logicalAND = logicalA && logicalB;
console.log("Logical AND :", logicalAND);

const logicalOR = logicalA || logicalB;
console.log("Logical OR :", logicalOR);

const logicalNOT = !logicalA;
console.log("Logical NOT :", logicalNOT);

// Logical operators: example 2

const logical1 = true && true;
console.log(logical1);

const logical2 = true && false;
console.log(logical2);

const logical3 = false && true;
console.log(logical3);

const logical4 = false && 3 === 4;
console.log(logical4);

const logical5 = "cat" && "dog";
console.log(logical5);

const logical6 = false && "cat";
console.log(logical6);

const logical7 = "cat" && false;
console.log(logical7);

// Logical operators: !(logical NOT)
const n1 = !true;
const n2 = !false;
const n3 = !"cat";
console.log("!(logical NOT): ", n1, n2, n3);

// BigInt operators
const bigA = 1n + 2n;
console.log("BigIntA: ", bigA);

const bigB = 1n / 2n;
console.log("BigIntB: ", bigB);

const bigC = 40000000000000000n >> 2n;
console.log("BigIntC: ", bigC);

// String operators
console.log("my" + "string");

let mystring = "alpha";
mystring += "bet";
console.log("mystring: ", mystring);

// Conditional (ternary) operator
// condition ? val1 : val2

let age = 20;
const status = age >= 18 ? "Adult" : "minor";
console.log("Ternary: ", status);

// Comma operator
const CX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const CA = [x, x, x, x, x];

// don't get it, will get back here.
//for (let i = 0, j = 9; i <= j; j++, j--) {
// console.log("Loop: ", `a[${i}][${j}] = ${a[i][i]}`);
// let loop1 = `a[${i}][${j}]`;
// console.log(loop1);
// let loop2 = `${a[i][j]}`;
// console.log(loop2);
//}

// Unary operators
// A unary operation is an operation with only one operand.

// delete
const myObj = {
  name: "Sakib",
  age: 31,
  home: "19/Kho, Kazibari Masjid",
};
console.log(myObj);
let del1 = delete myObj.name;
let del2 = delete myObj[age];
let del3 = delete myObj[0];
console.log("delete: ", del1);
console.log("delete: ", del2);
console.log("delete: ", del3);
console.log(myObj);

// typeof
const myFun = new Function("5 + 2");
const shape = "circle";
const size = 10;
const foo10 = ["apple", "mango", "orange"];
const today = new Date();

console.log("typeof: ", typeof myFun);
console.log("typeof: ", typeof shape);
console.log("typeof: ", typeof size);
console.log("typeof: ", typeof foo10);
console.log("typeof: ", typeof today);
console.log("typeof: ", typeof true);
console.log("typeof: ", typeof null);
console.log("typeof 62: ", typeof 62);
console.log("typeof - H: ", typeof "Hello World!");
console.log("typeof lastModified: ", typeof document.lastModified);
console.log("typeof window.length: ", typeof window.length);
console.log("typeof Math.LN2: ", typeof Math.LN2);

// Relational operators
// propNameOrNumber in objectName

// Arrays
const trees = ["redwood", "bay", "cedar", "oak", "maple"];

console.log("relational 0:", 0 in trees);
console.log("relational 3:", 3 in trees);
console.log("relational 6:", 6 in trees);
console.log("relational: bay", "bay" in trees); // (you must specify the index number, not the value at that index)

console.log("relational length:", "length" in trees); // returns true (length is an Array property)

// built-in objects
console.log("relational PI:", "PI" in Math);
const myString = new String("coral");
console.log("length" in myString);

// Custom objects
const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log("make" in myCar);
console.log("model" in myCar);

// instanceof
// objectName instanceof objectType;

const theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  console.log("True");
}

// Basic expressions
// this
console.log(this["propertyName"]);
console.log(this.propertyName);

// Not Understood properly.
function validate(obj, lowval, hival) {
  if (obj.value < lowval || obj.value > hival) {
    console.log("Invalid Value!");
  }
}

// Grouping operator
const groupA = 1;
const groupB = 2;
const groupC = 3;

const defaultA = groupA + groupB * groupC;
const evaluatedA = groupA + groupB * groupC;
const additionA = (groupA + groupB) * groupC;
const additionB = groupA * groupC + groupB * groupC;
console.log("Grouping Op: ", defaultA);
console.log("Grouping Op: ", evaluatedA);
console.log("Grouping Op: ", additionA);
console.log("Grouping Op: ", additionB);

// new
// const objectName = new ObjectType(param1, param2, paramN);

// super
// super(args);
// super.functionOnParent(args);
