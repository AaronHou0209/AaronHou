window,
  addEventListener("DOMContentLoaded", function () {
    let left = document.querySelector("#left-arrow");
    let right = document.querySelector("#right-arrow");
    // let totalBalls = 10;
    let box1Count = 10;
    let box2Count = 0;
    document.querySelector("#box1Count").innerText = box1Count;
    document.querySelector("#box2Count").innerText = box2Count;

    left.addEventListener("click", () => {
      if (box1Count > 0) {
        box1Count--;
        box2Count++;
        document.querySelector("#box1Count").innerText = box1Count;
        document.querySelector("#box2Count").innerText = box2Count;
      }
    });
    right.addEventListener("click", () => {
      if (box2Count > 0) {
        box1Count++;
        box2Count--;
        document.querySelector("#box1Count").innerText = box1Count;
        document.querySelector("#box2Count").innerText = box2Count;
      }
    });
  });
