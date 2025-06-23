window.addEventListener("DOMContentLoaded", function () {
  //   async function doSometing() {
  //     return "Hello Conestoga";
  //   }
  //   //   console.log(doSometing());
  //   doSometing().then((data) => {
  //     this.document.querySelector("#output").innerHTML = data;
  //   });
  //   doSometing().then((data) => {
  //     console.log(data);
  //   });

  this.document.querySelector("#btn1").addEventListener("click", loadAPI);
  async function loadAPI() {
    let response = await fetch("https://api.github.com/users");
    let response1 = await fetch("https://reqres.in/api/users");
    let data = await response.json();
    let data1 = await response1.json();

    data1.data.forEach((item) => {
      document.querySelector("#output").innerHTML += item.email + "<br/>";
    });
    data.forEach((item) => {
      document.querySelector("#output").innerHTML += item.login + "<br/>";
    });
  }
});
