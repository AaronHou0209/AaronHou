/* 
YOU NEED TO ANSWER YOUR ALL JS CODE IN THIS JS SHEET OR THE HTML FILE. NO ANSWERS IN THE QUESTION WORD DOCUMENT.
*/

/*

Name: ChengYu Hou 
Student Number:9004533

*/

window.addEventListener("DOMContentLoaded", function () {
  /*-----------------------------------------------------------------------------*/
  /* Question 1 - No answer required here as it is quiz part */
  /*---------------------------------------------------------------------------- */
  /*-----------------------------------------------------------------------------*/
  /* Question 2 [Short answers – Just write a one-line answer or even a word answer if that represents the concept] ALL ANSWERS SHOULD BE IN HTML - NOT HERE*/
  /* Answer to Part 1:*/

  /* Answer to Part 2*/

  /* Answer to Part 3*/

  /* Answer to Part 4 */

  /*-----------------------------------------------------------------------------*/
  /*-----------------------------------------------------------------------------*/
  /* Question 3 - ALL ANSWERS ARE NEEDED TO BE GIVEN HERE*/
  /* Answer to Part 1:*/
  var message = "I am doing ok in Midterm exam"; // set a original message
  let time = 80; // set a time i use
  if (time > 80 || time === 80) {
    // set a condtion
    var message = "I am panicked already"; // if above the 80, than message will change
    console.log(message);
  }

  /* Answer to Part 2*/
  function fetchPost() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true); // open and accedd the link
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // if xhr is work, than will print in the webist.
        document.getElementById("output").innerText = xhr.responseText;
      }
    };
    xhr.send();
  }
  fetchPost();

  /* Answer to Part 3*/
  function timer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Time out of your exam"));
      }, 3000); // out of time will print the error
    });
  }

  timer().catch((error) => {
    console.error(error.message);
  });
  /* Answer to Part 4 */
  const marks = 30;

  console.log("Marks:", marks);
  // /*-----------------------------------------------------------------------------*/
  /*-----------------------------------------------------------------------------*/
  /* Question 4 */
  /* YOU CAN USE BOX CLASS FOR GIVING STYLES TO THE DIVS THAT YOU WILL BE MAKING FOR ALL COUNTRIES AND PIC CLASS FOR FLAG PICTURES - YOU CAN SEE THESE TWO CLASSES IN <STYLE> ELEMENT IN HEAD SECTION OF INDEX.HTML*/
  let btn1 = this.document.querySelector("#btn1");
  let btn2 = this.document.querySelector("#btn2");

  const fetchData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((reponse) => {
        return reponse.json();
      })

      .then((data) => {
        let output = "";
        let i = 0;
        data.forEach((user) => {
          if (user.name.official.startsWith("I")) {
            if (i < 10) {
              output += `<div class = "box">
            <h1>${user.name.official}</h1>
            <hr/>
            <h1>${user.capital[0]}</h1>
      
            <img src="${user.flags.png}" class="pic">
            
            </div>`;
              document.querySelector("#output").innerHTML = output;
              i++;
            }
          }
        });
      });

    this.alert("fetchData clicked!"); //for testing purpose only.. write your own code here
  };
  const fetchData2 = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((reponse) => {
        return reponse.json();
      })
      .then((data) => {
        let output = "";
        let i = 0;
        data.forEach((user) => {
          if (user.name.official.startsWith("C")) {
            if (i < 13) {
              i++;
              output += `<div class = "box">
          <h1>${user.name.official}</h1>
          <hr/>
          <h1>${user.name.capital}</h1>

          <img src="${user.flags.png}" class="pic">
          
          </div>`;
              document.querySelector("#output").innerHTML = output;
            }
          }
        });
      });

    this.alert("fetchData2 clicked!"); // for testing purpose only.. write your own code here
  };
  btn1.addEventListener("click", fetchData);
  btn2.addEventListener("click", fetchData2);

  /*-----------------------------------------------------------------------------*/
});
