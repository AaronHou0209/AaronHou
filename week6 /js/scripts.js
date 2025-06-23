// Promises:

// How to write promises ?

let p = new Promise(function (resolve, reject) {
  let a = 5 + 3; // some processing

  if (a === 10) {
    resolve("Success!!!"); //resolve the promise with a value / fulfilled..
  } else {
    reject("Failed"); //not fulfilled .. or rejected..
  }
});

// How to call/use this promise ...

p.then(function (message) {
  console.log("PROMISE FULFILLED", message);
}).catch(function (error) {
  console.log("PROMISE REJECTED", error);
});
// .then() for runnung resolve, catch() for running reject
