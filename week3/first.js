let names = ["Alan", "Bob", "Christina"];
let mixed = ["Alan", 23, true, 5.8];

console.log(mixed[mixed.length - 1]);

let numbers = [1, 2, 3];
console.log(numbers);

//add the element in the last
numbers.push(4);
console.log(numbers);
numbers.push(5);
console.log(numbers);
// pop delete the last element
numbers.pop();
console.log(numbers);
// add a element in the beginning
numbers.unshift(10);
console.log(numbers);
numbers.unshift(20);
console.log(numbers);
// shift remove the first element
numbers.shift();
console.log(numbers);

//Run a loop to store all even numbers in array with 1 to 100

let even = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    even.push(i);
  }
}
console.log(even);

// run a loop to store all number can divided by 3 in the front with 1 to 100
let dividedByThree = [];
for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0) {
    dividedByThree.unshift(i);
  }
}
console.log(dividedByThree);

let position = [43.2345, -79.2134];
//index notation to read values of array
let lat = position[0];
let lon = position[1];

//destrcturung

let [lat2, lon2] = position;

let dareString = "21/01/2025";
// split = add the element in every element
let [day, month, year] = dareString.split("/");
console.log(dareString.split("/"));

let emailAddress = "alan.smith@gmail.com";
let [, domain] = emailAddress.split("@");

console.log(emailAddress.split("@"));

let list = [1, 2, 3, 4];
//by using for loop

let listCopy = [];
for (let i = 0; i < list.length; i++) {
  let element = list[i];
  element += 3;
  listCopy.push(element);
}

let listCopy1 = [];
//by using forEach method
list.forEach(function (element) {
  element += 3;
  listCopy1.push(element);
});

let fruit = ["apple", "banana", "orange"];
fruit.forEach(function (fruit) {
  console.log(fruit.toUpperCase());
  console.log(`${fruit} in capital letters is ${fruit.toUpperCase()}`);
  console.log(fruit.slice(0, 4));
});

//map method

let listmap = [1, 2, 3, 4];
let listCopyMap = listmap.map(function (element) {
  return element + 3;
  // let listCopyMap = listmap.map((element) => element + 3);
});

//過濾 filter
let listCopyModel = list.filter((element) => element > 2);

console.log(list);
console.log(listCopy);
console.log(listCopy1);
console.log(listCopyMap);
console.log(listCopyModel);

let fruit2 = ["Apple", "Apricot", "Banana", "Orange"];
let fruitCopy = fruit2.filter((fruit2) => fruit2.startsWith("A"));
console.log(fruitCopy);
