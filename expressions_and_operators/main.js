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
