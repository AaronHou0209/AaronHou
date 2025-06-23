// JS Question A
function applyDiscount(amount, discount) {
  return discount ? amount - discount : amount;
}

console.log(applyDiscount(100, 10));

//JS Question B

let total = 0;
function findtheNumbers(...numbers) {
  for (let i = 0; i <= numbers.length; i++) {
    total += numbers[i];
    let isUnder50;

    if (numbers[i] > 50) {
      let isUnder50 = false;
      return isUnder50;
      break;
    } else {
      let isUnder50 = true;
      return isUnder50;
    }
  }
}

console.log(findtheNumbers(23, 45, 35, 55, 2));

//JS Question C
function formatTime(second) {
  let min = second % 60;
  let second2 = Math.floor(second / 60);
  let hour = second2 % 60;
  let second3 = Math.floor(second2 / 60);
  let day = Math.floor(second3 / 24);

  return console.log(`${day}day,${hour}hour,${min}min`);
}

formatTime(864435);

//JS Questoin D

function findMatches(a, ...numbers) {
  let times = 0;
  for (let i = 0; i <= numbers.length; i++) {
    if (a == numbers[i]) {
      times++;
    }
  }
  return times;
}

findMatches();
