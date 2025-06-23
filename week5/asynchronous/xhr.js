window.addEventListener("DOMContentLoaded", function () {
  let btn1 = document.querySelector("#btn1");
  btn1.addEventListener("click", function () {
    //Step1 : Create the XMLHttpRequest (XHR) object or request
    let xhr = new XMLHttpRequest(); //Create a new XMLHttpRequest object

    //Step2 : Configure/ open the request
    xhr.open("GET", "../DATA/test.txt");

    //Step3 : What to do when the request is successful?
    xhr.onload = function () {
      if (this.status === 200) {
        document.querySelector("#output").innerHTML = this.responseText;
      } else {
        document.querySelector("#output").innerHTML = "Error:Somting is worng";
      }
    };
    //Step4 :Send the request
    xhr.send();
  });

  let btn2 = document.querySelector("#btn2");
  btn2.addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "../DATA/user.json");

    xhr.onload = function () {
      if (this.status === 200) {
        let user = JSON.parse(this.responseText);
        document.querySelector(
          "#output"
        ).innerHTML = `ID:${user.id}, <br/> Name:${user.name}, <br/>Mail:${user.email}`;
      }
    };
    xhr.send();
  });
  let btn3 = document.querySelector("#btn3");
  btn3.addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "../DATA/users.json");

    xhr.onload = function () {
      if (this.status === 200) {
        let users = JSON.parse(this.responseText);
        let output = "";
        users.forEach((user) => {
          output += `<div class = "box"><h1>${user.id}</h1><h2>${user.name}</h2><h3>${user.email}</h3></div>`;
        });
        document.querySelector("#output").innerHTML = output;
      }
    };
    xhr.send();
  });
  let btn4 = document.querySelector("#btn4");
  btn4.addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users");
    xhr.onload = function () {
      if (this.status === 200) {
        let users = JSON.parse(this.responseText);
        let output = "";
        users.data.forEach((user) => {
          output += `<div class = "box"> ID:${user.id} <br/> <a href = "${user.avatar}" target = "_blank"><img src ="${user.avatar}" alt = "profile" class ="profile" ><a/> <br/><p>${user.login}<p/> <br/>${user.email}<br/> <button>More info</div>`;
        });
        document.querySelector("#output").innerHTML = output;
      }
    };
    xhr.send();
  });
  let btn5 = document.querySelector("#btn5");
  btn5.addEventListener("click", function () {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users");
    xhr.onload = function () {
      if (this.status === 200) {
        let users = JSON.parse(this.responseText);
        let output = "";
        users.forEach((user) => {
          output += `<div class = "box"> <h3>ID:${user.id}<h3/> <br/> <a href = "${user.avatar_url}" target = "_blank"><img src ="${user.avatar_url}" alt = "profile" class ="profile" ><a/> <br/><p>${user.login}<p/> <br/>${user.node_id} <br/> <a href = "${user.url}" target="_blank"><button  >More info<a/></div>`;
        });
        document.querySelector("#output").innerHTML = output;
      }
    };
    xhr.send();
  });
});
