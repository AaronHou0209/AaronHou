//First question
let shoppingList = ["milk", "bread", "eggs"];
shoppingList.push("butter");
shoppingList.shift();
shoppingList.unshift("cheese");
console.log(shoppingList);

//Second question

let numbers = [10, 20, 30, 40, 50];

console.log(numbers.includes(30), numbers.indexOf(40));

//thrid question

let list = ["apple", "banana", "cherry"];
for (let i = 0; i < list.length; i++) {
  console.log(list[i].toUpperCase());
}

// String pratice

//String Concatenation
let firstName = "Aaron";
let lastName = "Hou";
let FullName = firstName + lastName;
console.log(`Hello, my name is ${FullName}`);

//Handling Quotes

console.log("It's a 'beautiful' day!");

//String to Number Conversion
let StringNumber = "42";
let OppsiteStringNumber = Number(StringNumber) + 10;
console.log(OppsiteStringNumber);
