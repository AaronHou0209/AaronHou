window.addEventListener("DOMContentLoaded", function () {
  let btn = document.querySelector("#btn1");
  let input = document.querySelector("#accessnumber");
  let output = document.querySelector("#output");
  let select = document.querySelector("#dogBrand");
  // using fetch
  // input all dog brand into the select
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((respond) => {
      return respond.json();
    })
    .then((data) => {
      //cause the webist not an array, rather than it's object
      Object.keys(data.message).forEach((user) => {
        //add every item
        document.querySelector(
          "#dogBrand"
        ).innerHTML += `<option value="${user}">${user}</option>`;
      });
    });
  // access the photo which user select
  btn.addEventListener("click", function () {
    let brand = select.value;
    let number = parseInt(input.value);
    if (!brand || number <= 0 || number > 100 || isNaN(number)) {
      alert(`chose brand and entry ${number}`);
      return;
    }
    fetch(`https://dog.ceo/api/breed/${brand}/images/random/${number}`)
      .then((respond) => {
        return respond.json();
      })
      .then((data) => {
        output.innerHTML = "";
        data.message.forEach((user) => {
          document.querySelector(
            "#output"
          ).innerHTML += `<img src="${user}" class="pic">`;
        });
      });
  });
});
