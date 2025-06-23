window.addEventListener("DOMContentLoaded", function () {
  let posts = [
    { id: 1, name: "Alan Smoth", email: "abc@gmail.com" },
    { id: 2, name: "Bob Reid", email: "bob@gmail.com" },
    { id: 3, name: "Christina Lee", email: "christina@gmail.com" },
  ];
  //   posts.push({ id: 4, name: "Dough Ford", email: "dough@gmail.com" }); //add element in list

  // by using callback function......
  //     function creatPosts(post, cb) {
  //       setTimeout(function () {
  //         posts.push(post);
  //         cb();
  //       }, 3000);
  //     }

  //     function getPosts(post) {
  //       setTimeout(function () {
  //         posts.forEach(function (post) {
  //           document.querySelector(
  //             "#output"
  //           ).innerHTML += `ID ${post.id} <br/> Name: ${post.name}<br/>Email:${post.email} <br/>`;
  //         });
  //       }, 4000);
  //     }

  //     creatPosts({ id: 4, name: "Dough Ford", email: "dough@gmail.com" }, getPosts);

  let onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!isKayoSick) {
          resolve(2);
        } else {
          reject("I am Sick!!!!!!!!!");
        }
      }, 2000);
    });
  };

  onMyBirthday(false)
    .then((no) => {
      console.log(`Hurray we have ${no} cakes!!!`);
    })
    .catch((e) => {
      console.log(`Very Bad`, e);
    })
    .finally(() => {
      console.log("Part Start");
    });
});

fetch("https://reqres.in/api/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.data.forEach((item) => {
      console.log(item.first_name, item.last_name, item.email);
    });
  });
