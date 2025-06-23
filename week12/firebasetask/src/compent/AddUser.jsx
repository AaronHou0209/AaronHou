import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddUser = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "Alan Smith",
      email: "alan.smith@gmail.com",
    });
    console.log("Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document", error);
  }
};
export default AddUser;
