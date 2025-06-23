import { useEffect, useState } from "react";
import "./App.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Ensure db is imported
import AddUser from "./compent/AddUser"; // Fixed typo in "component"

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async () => {
    await AddUser(); // Add a new user
    fetchUsers(); // Refresh user list after adding
  };

  return (
    <>
      <h1>Using Firestore</h1>
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
