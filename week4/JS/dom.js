window.addEventListener("DOMContentLoaded", function () {
  let cat = this.document.querySelector("#cat");

  cat.addEventListener("click", handleClick);

  function handleClick(evt) {
    cat.src = nextCatImageUrl();
    console.log(evt.clientX, evt.clinetY);
    //evt 出現很多資訊
    //evt.clientX 滑鼠位置 for x,evt.clientY 滑鼠位置 for y
    document.querySelector("#xPos").remove();
    document.querySelector("#yPos").remove();
    evt.stopPropagation();
  }
  let currentCatIndex = 0;
  function nextCatImageUrl() {
    currentCatIndex++;
    if (currentCatIndex === cats.length - 1) {
      currentCatIndex = 0;
    }

    return cats[currentCatIndex];
  }

  // this.document.body.addEventListener("mousemove", handleClick2);
  // function handleClick2(e) {
  //   console.log("body clicked");
  //   console.log(e.clientX, e.clientY);
  //   document.querySelector("#xPos").innerText = e.clientX;
  //   document.querySelector("#yPos").innerText = e.clientY;
  // }

  //timefunction
  // this.setTimeout(function () {
  //   cat.src = nextCatImageUrl;
  // }, 3000);
  // //3000 = 3sec
  // this.setTimeout(function () {
  //   cat.remove();
  //   document.querySelector("#pos").remove();
  // }, 10000);

  let btn1 = document.querySelector("#btn1");
  btn1.addEventListener("click", handleMore);
  function handleMore() {
    let i = 1;
    let ol = document.createElement("ol");

    cats.forEach(function (url) {
      let li = document.createElement("li");
      li.innerHTML = `<a href = "${url}"><img src="${url}" width= "100px" class="pic"/></a>`;
      // li.innerText = url;s
      // li.innerHTML = `<a href = "${url}">${url}</a>`;
      // let a = document.createElement("a");
      // a.href = url;
      // a.innerHTML = url;
      // a.innerHTML = `picture no.${i++}`;
      // a.target = "_blank";
      // li.appendChild(a);
      ol.appendChild(li);
    });
    document.querySelector("#list").appendChild(ol);
  }
});
