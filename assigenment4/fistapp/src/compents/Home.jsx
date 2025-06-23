import { useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);
  const [vegetarianOnly, setVegetarianOnly] = useState(false);

  const search = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await res.json();
    if (data.meals) {
      setMeals(
        vegetarianOnly
          ? data.meals.filter((meal) => meal.strCategory === "Vegetarian")
          : data.meals
      );
    } else {
      setMeals([]);
    }
  };

  return (
    <div className="home back">
      <h1 className="homeh1">{title}</h1>
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

      <form onSubmit={search}>
        <input
          type="text"
          placeholder="Search by meal name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label className="check">
          <input
            type="checkbox"
            checked={vegetarianOnly}
            onChange={(e) => setVegetarianOnly(e.target.checked)}
          />
          Vegetarian only
        </label>
        <button type="submit">Search</button>
      </form>

      <div className="results">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="box">
            <h3 style={{ textalign: "center" }}>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
            <br />
            <Link
              to={`/recipe/${meal.idMeal}`}
              state={{ meal }}
              style={{ textDecoration: "none" }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
