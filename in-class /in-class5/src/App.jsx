import "./App.css";
import BookList from "./component /BookList";
import Header from "./component /Header";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Book from "./component /Book";

function App() {
  //create a array for store
  const [books, setBooks] = useState([]);
  // get book list from the web
  useEffect(() => {
    const fetchGet = async () => {
      const request = await fetch("http://localhost:9000/books");
      const get = await request.json();
      setBooks(get);
    };
    fetchGet();
  }, []);
  return (
    // build a link path
    <Router>
      <div>
        {" "}
        {/* add header on the top  */}
        <Header title="BooKList Website" />
      </div>
      {/* set in the main and id page that what info show.  */}
      <Routes>
        <Route path="/" element={<BookList books={books} />} />
        <Route path="/books/:id" element={<Book books={books} />} />
      </Routes>
    </Router>
  );
}

export default App;
