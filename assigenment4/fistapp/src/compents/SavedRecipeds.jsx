//Routing Setup
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const SavedRecipeds = () => {
  const [receipts, setReceipts] = useState([]);
  //get firestore data
  const fetchreceipts = async () => {
    const got = await getDocs(collection(db, "Receipts"));
    const receiptsList = got.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setReceipts(receiptsList);
  };
  useEffect(() => {
    fetchreceipts();
  }, []);
  // delete data in firestore dat
  const DeleteData = async (id) => {
    await deleteDoc(doc(db, "Receipts", id));
    fetchreceipts();
  };
  return (
    <div className="back">
      <h1>SavedRecipeds</h1>
      {/* set up the navbar  */}
      <nav>
        {" "}
        <Link to={`/`} style={{ textDecoration: "none", margin: "20px" }}>
          {" "}
          Home{" "}
        </Link>
        <Link to={`/saved`} style={{ textDecoration: "none", margin: "20px" }}>
          Like
        </Link>
      </nav>

      {receipts.map((receipt) => (
        <div key={receipt.id} className="box">
          <h3>{receipt.MealName}</h3>
          <img
            src={receipt.Picture}
            alt={receipt.Picture}
            width="200"
          ></img>{" "}
          <p>{receipt.Description}</p>
          <button
            onClick={() => {
              DeleteData(receipt.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default SavedRecipeds;
