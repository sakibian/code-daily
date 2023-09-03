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
