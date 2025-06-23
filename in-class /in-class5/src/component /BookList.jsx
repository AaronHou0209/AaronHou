import { Link } from "react-router-dom";

function BookList({ books }) {
  return (
    <div>
      {/* review and search the book we want  */}
      {books.map((book) => (
        <div className="box" key={book.id}>
          <h1>Title: {book.title}</h1>
          <h3 className="same">Book ID: {book.id}</h3>
          <h3 className="same">Author: {book.author}</h3>
          {/* set the link where we go  */}
          <Link to={`/books/${book.id}`}>See more Detail!</Link>
        </div>
      ))}
    </div>
  );
}

export default BookList;
