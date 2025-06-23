//Strings

let str1 = "Hello Conestoga";
let str2 = "Hello Conestoga";
let str3 = `Hello Conestoga ${"hello world".split(" ")} `;
console.log(
  str1 + "First String" + str2 + "Second String" + str3 + "Third String"
);

console.log(`First String${str1} Second String${str2} Third String ${str3}`);

console.log(`This is 
    a new line 
    another line 
    another line`);

let str = "Hello Conestoga";

console.log(str + 12 + "Hello");
console.log(`${str} 12 ${str.toUpperCase()}`);

let num = 123;
console.log(num); //nubmer
let str4 = String(num);
console.log(str4); //string

let num1 = "123";
let num2 = Number(num1);
console.log(num2);

// prompt is like input in Python
function greet() {
  const name = prompt("What is your name?");
  console.log(`Hello, ${name}!`);
}

greet();

const userInput = prompt("Enter the number");
const result = userInput + 4;

const result1 = Number(userInput) + 4;
console.log(result, result1);

console.log("This is 's' name"); // \" or \' or \` 可以使用在String 李，避免同出現error

console.log("c\\\text\\tip\\trxt");

let str5 = "the best sound is this world, is your name";

function addPeriod(s) {
  // method 1  return "${s}.";

  // method 2
  // if (s.endsWith(".")) {
  //   return s;
  // } else {
  //   return s + ".";
  // }

  // method 3   return s.endsWith(".") ? s : s + ".";

  //method 4
  // return s.includes(".") ? s : `${s}.`;

  //method 5
  let lastPos = s.length - 1;
  // return s.charAt(lastPos) === "." ? s : `${s}.`;

  //method 6
  return s.lastIndexOf(".") === lastPos ? s : `${s}.`;
}

console.log(addPeriod("hello"));
console.log(addPeriod(str5));

// Write a function that accepts a string and returns the string with all vowels capitalize
// capitalize("Hello this is a string") => HELLO thIs A strIng.

let capitalize = "Hello this is a string";
function PraticeinClass(s) {
  // let arr = s.split("");
  // for (let i = 0; i < s.length; i++) {
  //   if (
  //     arr[i] == "i" ||
  //     arr[i] == "e" ||
  //     arr[i] == "o" ||
  //     arr[i] == "a" ||
  //     arr[i] == "l"
  //   ) {
  //     arr[i] = arr[i].toUpperCase();
  //   }
  // }
  // return arr.join("");

  return s.replace(/[aeiou]/g, (char) => char.toUpperCase());
  //char is a function of those charaters.\
  //   //g 選取所許要的 /d 0~9得數字皆可選擇  ? 可選可不選 ^否定 s空格  +收尋之後的
}

console.log(PraticeinClass(capitalize));
