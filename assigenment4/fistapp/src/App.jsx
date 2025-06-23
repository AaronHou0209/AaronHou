//Routing Setup
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./compents/Home";
import RecipeDetails from "./compents/RecipeDetails";
import SavedRecipeds from "./compents/SavedRecipeds";

function App() {
  const [recipet, setRecipet] = useState([]);
  const [showRecipet, setShowRecipet] = useState(true);
  // get info from server
  useEffect(() => {
    const fetchget = async () => {
      const get = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
      );
      const set = await get.json();
      setRecipet(set);
    };
    fetchget();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              title="Serach Recipet!!"
              onAdd={() => setShowRecipet(!showRecipet)}
            />
          }
        ></Route>
        <Route path="/recipe/:id" element={<RecipeDetails />}></Route>
        <Route path="/saved" element={<SavedRecipeds />} />
      </Routes>
    </Router>
  );
}

export default App;
