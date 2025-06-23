import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import SavedRecipeds from "./SavedRecipeds";

const RecipeDetails = () => {
  const { id } = useParams(); // get id of the web
  const location = useLocation(); // access the path of file
  const navigate = useNavigate(); // for back to the home
  // if got the state from home page that set up, otherwise set null
  const [recipe, setRecipe] = useState(location.state?.meal || null);

  // link to the web
  const fetchget = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      // list the first found info
      .then((data) => setRecipe(data.meals?.[0]));
  };

  useEffect(() => {
    if (!recipe) {
      fetchget();
    }
    // everytime id and recipe changed that re-getting
  }, [id, recipe]);

  // Add data to the firestore
  const saveRecipeToFirestore = async () => {
    const Send = await addDoc(collection(db, "Receipts"), {
      MealID: `${recipe.idMeal}`,
      MealName: `${recipe.strMeal}`,
      Picture: `${recipe.strMealThumb}`,
      Description: `${recipe.strInstructions}`,
    });
  };
  //Active Save Function
  const Actvie = () => {
    saveRecipeToFirestore();
    fetchget();
  };

  // error detect
  if (!recipe) return <div>Loading...</div>;

  return (
    // grab all info
    <div className="back">
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

      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="pic" />
      <p>{recipe.strInstructions}</p>
      <button onClick={Actvie}>Save/Like</button>
      <button onClick={() => navigate("/")}>Back </button>
    </div>
  );
};

export default RecipeDetails;
