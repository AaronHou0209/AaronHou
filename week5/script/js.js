window.addEventListener("DOMContentLoaded", function () {
  //capturing the form from page...
  let form = document.querySelector("#form1");
  form.addEventListener("sumbit", handleForm);
  function handleForm(event) {
    // console.log("Form subnitted");

    let title = document.querySelector("#title").value;
    let isbn = document.querySelector("#isbn").value;
    let author = document.querySelector("#author").value;
    // console.log(title, isbn, author);

    addBookTolist(title, isbn, author);
    clearFields();

    event.preventDefault();
  }
  function addBookTolist(t, i, a) {
    // console.log(t, i, a);

    if (t === "" || a === "" || i === "") {
      alert("Please fill all fields");
    } else {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${t}</td><td>${i}</td><td>${a}</td>
      <button class="delete">Delete</buttom>`;
      //now append this row to the table
      document.querySelector("#list").appendChild(tr);
      showAlert("Book Succesfully added", "success");
    }
  }
  function clearFields(t) {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
    showAlert("Book Succesfully added", "error");
  }

  function showAlert(message, c) {
    let p = document.createElement("p");
    p.innerText = message;
    p.className = c;
    p.id = "box";
    document.querySelector("#notify").appendChild(p);
  }
  setTimeout(function () {
    document.querySelector("#box").remove();
  }, 3000);

  let deleteArea = document.querySelector("#area");
  deleteArea.addEventListener("click", handleDelete);
  function handleDelete(event) {
    // console.log(event.target)
    deleteBook(event.target);
  }
  function deleteBook() {
    if (elementToDelete.className === "delete") {
      // console.log("Right area clicked");

      elementToDelete.parentElement.parentElement.remove();
      showAlert("Book removed successfilly", "success");
    } else {
      // console.log("Wrong area clicked");
      showAlert("Wrong area clicked,click the delete button", "error");
    }
  }
});
