//Question 1
const label = "conestogacollege";
const tld = "ca";
const domainName = label + "." + tld;
console.log("Domain Name:" + domainName);

//Quesion 2
let isConestoga;
if (domainName === "Conestogacollege.ca") {
  isConestoga = "true";
} else {
  isConestoga = "false";
}
console.log("Is Conestoga College Domain: " + isConestoga);

//Question 3

if (isConestoga == "true") {
  isNotConestoga = "false";
  console.log("Suspicious Domain Detected: " + isNotConestoga);
} else if (isConestoga == "false") {
  isNotConestoga = "true";
  console.log("Suspicious Domain Detected: " + isNotConestoga);
}

//Question 4

// Math.floor() is for become a near number of the function generate
// Math. random() is for generate a number between 0 and 1

let byte1 = Math.floor(Math.random() * 256);
let byte2 = Math.floor(Math.random() * 256);
let byte3 = Math.floor(Math.random() * 256);
let byte4 = Math.floor(Math.random() * 256);

console.log(
  "Generated IP Address:" + byte1 + "." + byte2 + "." + byte3 + "." + byte4
);

//Question 5

let x = 12;

for (let i = 1; i <= 10; i++) {
  let y = x * i;
  console.log(x + "*" + i + "=" + y);
}

//Question 6

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("Even:" + i);
  } else if (i % 2 != 0) {
    console.log("Odd:" + i);
  }
}

// Question 7
let sum_of_even = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sum_of_even += i;
    if (i == 100) {
      console.log("Sum of Even Weights: " + sum_of_even);
    }
  }
}

// Question 8

let test_number = Math.floor(Math.random() * 200);
let sum = 0;
for (let i = 1; i <= test_number; i++) {
  if (test_number % i == 0) {
    sum += i;
    if (sum === test_number) {
      console.log(test_number + "is a Perfect Allocation: True");
      break;
    } else if ((i === test_number) & (sum != test_number)) {
      console.log(test_number + " " + "is a Perfect Allocation: False");
    }
  }
}

//Question 9

let number = "33454";
let test = isNaN(number);

switch (test) {
  case false:
    test = true;
    console.log("Product ID " + number + " is Prime: " + test);
    break;
  case true:
    test = false;
    console.log("Product ID " + number + " is Prime: " + test);
    break;
}
