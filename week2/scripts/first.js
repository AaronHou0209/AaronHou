console.log("WEEK2");

// Operators in JavaScripts:
// Assignment Operator: =
// Arithmetic Operator: +, -, *, /, %,
// Logical Operator: &&, ||, |
// Comparison Operator: ==, !=, ===, !==, >, <, >=, <=

let age = 20;

if (age == "20") {
  console.log("Yes");
} else {
  console.log("No");
}

if (age === "20") {
  console.log("Yes");
} else {
  console.log("No");
}

// Arithmetic Assignment Operator: +=, -=, *=, /=, %=

let x = 10;
x = x + 20;
console.log("x:" + x);

let y = 10;
y += 20;
console.log("y:" + y);

// Increment /Decrement Operator: ++, --

let z = 1;
z++; // ++z = z++
console.log("z:" + z);
console.log(z++); // 先print在相加 z 會print 2,但實際上是3
console.log(z);
console.log(++z); // 先相加在print z 會print 4

// Ternary Operator: ?, :
// condition ? value_if_true : value_if_false
let ages = 20;
let message;
ages > 18 ? console.log("Yes") : console.log("No");
// like if else

message = ages > 18 ? "Yes" : "No";
console.log(message);

// NaN.. Not a Number

console.log(isNaN("xyz"));

let d = 10;
let p = null; // null = 0
console.log(d + p);

x = y + 10;
// Conditions in JavaScripts
if (age > 10) {
} else if (age < 20) {
} else {
}

// switch statement :

let age2 = 30;
switch (age2) {
  case 10:
    console.log("You are 10 ");
    break;
  case 18:
    console.log("You are 18");
    break;
  case 20:
    console.log("You are 20 ");
    break;
  default:
    console.log("You are not 10, 18, and 20 ");
}

let month = 2;
switch (month) {
  case 1:
    consloe.log("It's Jan");
    break;
  case 2:
    console.log("It's Feb");
    break;
  case 3:
    console.log("It's March");
    break;
  default:
    console.log("It isn't Jan, Feb, or March");
}

// loops :
for (let i = 10; i > 0; i--) {
  console.log(i);
}

let table = 9;
let start = 1;
let end = 10;

for (let i = 1; i <= 10; i++) {
  // console.log("5 X" + i + "=" + 5 * i);
  console.log(`${table} X ${i} = ${table * i}`);
}

//Function Declaearions:

function noop() {}

function square(a) {
  console.log(a * a);
  return a * a;
}

square(5);

function add(a, b) {
  return a + b;
}

//Function Expressions

let noop2 = function () {};
let square2 = function (a) {
  return a * a;
};
let add2 = function (a, b) {
  return a + b;
};

//Arrow Functions
let noop3 = () => {};

let square3 = (a) => a * a;

let add3 = (a, b) => a + b;

function log(a) {
  console.log(a, arguments.length, arguments[0]);
}
log(5);
log();
log(5, 3, 6);

//..rest operator...

function log2(a, ...numbers) {
  console.log(numbers.length, numbers[0]);
}

log2(7);
log2(0);
log2(1, 2, 3, 4);

//Optional Parameters:

function updateSalary(currentSalary, increment, bonus) {
  // if (bonus) {
  //   return currentSalary + increment * bonus;
  // } else {
  //   return currentSalary + increment;
  // }

  return bonus ? currentSalary + increment * bonus : currentSalary + increment;
}

console.log(updateSalary(100, 10));
console.log(updateSalary(100, 10, 10));
