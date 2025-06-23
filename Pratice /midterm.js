//1.
function isPrime(e) {
  let number = 0;
  while (number != e) {
    let result;
    if (e % number == 0) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
}
console.log(isPrime(7));
console.log(isPrime(10));
