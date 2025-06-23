/* ------------------------
Student Name: ChengYu   
Student ID: 9004533
Course: Programming Dynamic Websites
Assignment: Assignment # 01 
---------------------------------------*/

window.addEventListener("DOMContentLoaded", function () {
  let point = 0;
  let totaltime = 30;
  let gamearea = document.querySelector("#game-area");
  let widely = gamearea.getBoundingClientRect();
  let cat = document.querySelector("#cat");
  let timer = document.querySelector("#timer");
  let gameover = document.querySelector("#game-over");
  let finalscore = document.querySelector("#final-score");
  let score = document.querySelector("#score");

  function GetBounding() {
    //x only get once
    function x() {
      let result = Math.random() * (widely.right - widely.left) + widely.left;
      return result;
    }
    // x will changed per second
    let xPos;
    setInterval(() => {
      xPos = x();
    }, 1000);
    //y only get once
    function y() {
      let result = Math.random() * (widely.bottom - widely.top) + widely.top;
      return result;
    }
    // y will changed per second
    let yPos;
    setInterval(() => {
      yPos = y();
    }, 1000);
    // changed per sec
    setInterval(() => CatMovement(xPos, yPos), 1000);

    function CatMovement(x, y) {
      if (cat && x !== undefined && y !== undefined) {
        // make pic can move anywhere in the game-area
        cat.style.position = "absolute";
        // set the value of x Position and y Position
        cat.style.left = `${x}px`;
        cat.style.top = `${y}px`;
      }
    }
    cat.addEventListener("click", GetPoint);
    function GetPoint() {
      point++;
      return (score.innerText = `Score:${point}`);
    }

    //timer decreasing

    function TimeDecreaing() {
      if (totaltime > 0) {
        totaltime = totaltime - 1;
        timer.innerText = `Time : ${totaltime}`;
      }
      // when timer = 0 sec show the result
      else if (totaltime === 0) {
        finalscore.innerText = ` ${point}`;
        gameover.innerText = "Game Over!";
        alert(`${gameover.innerText} ${finalscore.innerText}`);
      }
    }
    setInterval(TimeDecreaing, 1000);
  }

  //Main code
  GetBounding();
});
