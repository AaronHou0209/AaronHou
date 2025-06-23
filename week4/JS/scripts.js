// Events in DOM..

//1. Click
let x = document.querySelector("#first");

x.addEventListener("click", function () {
  x.innerText = "Bye Bye";
  let pic = document.querySelector("#pic1");
  pic.src = "./images/flowers.jpg";

  let newPic = document.createElement("img");
  newPic.src = "./images/flowers.jpg";
  newPic.width = "300px";
  document.querySelector("#pictures").appendChild(newPic);
});

let y = document.querySelector("#pic1");
y.addEventListener("click", function () {
  x.innerText = "Picture Clicked";
});
