window.addEventListener("DOMContentLoaded", function () {
  let posts = [
    { id: 1, name: "Alan Smoth", email: "abc@gmail.com" },
    { id: 2, name: "Bob Reid", email: "bob@gmail.com" },
    { id: 3, name: "Christina Lee", email: "christina@gmail.com" },
  ];
  //   posts.push({ id: 4, name: "Dough Ford", email: "dough@gmail.com" }); //add element in list

  // by using callback function......
  function creatPosts(post, cb) {
    setTimeout(function () {
      posts.push(post);
      cb();
    }, 3000);
  }

  function getPosts(post) {
    setTimeout(function () {
      posts.forEach(function (post) {
        document.querySelector(
          "#output"
        ).innerHTML += `ID ${post.id} <br/> Name: ${post.name}<br/>Email:${post.email} <br/>`;
      });
    }, 4000);
  }

  creatPosts({ id: 4, name: "Dough Ford", email: "dough@gmail.com" }, getPosts);
});
