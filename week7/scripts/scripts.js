window.addEventListener("DOMContentLoaded", function () {
  let btn1 = this.document.querySelector("#btn1");
  btn1.addEventListener("click", function () {
    let output = "";
    fetch("https://api.github.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((user) => {
          let match = user.login;
          //   output += `<div class = "profile">
          //     <h1>${user.id}</h1>
          //     <hr/>
          //     <h1>${user.login}</h1>
          //     <a href = "${user.avatar_url}" target ="_blank">
          //     <img src="${user.avatar_url}" class="profilePIC">
          //     </a>
          //     <p><a href = "${user.followers_url}">${user.type}</a></p>
          //     <hr/>
          //     <a href ="${user.url}" target = "_blank">
          //     <button>More info...</button>
          //     </a>
          //     </div>`;
          if (match.startsWith("w")) {
            // match = user.login.toUppercase();
            // let matchid = user.id.toUppercase();
            output += `<div class = "profile">
            <h1>${user.id}</h1>
            <hr/>
            <h1>${user.login.toUpperCase()}</h1>
            <a href = "${user.avatar_url}" target ="_blank">
            <img src="${user.avatar_url}" class="profilePIC">
            </a>
            <p><a href = "${user.followers_url}">${user.type}</a></p>
            <hr/>
            <a href ="${user.url}" target = "_blank">
            <button>More info...</button>
            </a>
            </div>`;
            document.querySelector("#output").innerHTML = output;
          }
        });
      });
  });
});
