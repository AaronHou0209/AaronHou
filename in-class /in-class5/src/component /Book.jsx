import { useState, useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";

const Book = () => {
  const pathname = useLocation();

  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  //get info from web
  useEffect(() => {
    const fetchGet = async () => {
      // go to sepecificate id path
      const request = await fetch(`http://localhost:9000/books/${id}`);
      const get = await request.json();
      setBooks(get);
      // change to false that ledding to another page
      setLoading(false);
    };
    fetchGet();
  }, [id]); // make sure when id changed that recive
  // if the lasding is not work that shows different
  return loading ? (
    <h1>LOADING~~</h1>
  ) : (
    <div>
      <div className="box">
        <h2>Title :{books.title}</h2>
        <h2>Author:{books.author}</h2>
      </div>
      {/* go back  */}
      <Link to={`http://localhost:5174`}>Go Back!</Link>

      <hr />
      {/* show the path link name  */}
      <p>This is located at {pathname.pathname}</p>
    </div>
  );
};

export default Book;
