import { useNavigate, useParams } from "react-router-dom";
import styles from "./Recipe.module.css";
import { useEffect, useState } from "react";
import { getMealByID } from "../../api";
import Preloader from "../../components/Preloader/Preloader";

export default function Recipe({}) {
  const [recipe, setRecipe] = useState<IAPIRecipe>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMealByID(id!).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);

  return (
    <div className={styles.recipe}>
      {!recipe ? (
        <Preloader />
      ) : (
        <div>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && (recipe as any)[key]) {
                  return (
                    <tr key={key}>
                      <td>{(recipe as any)[key]}</td>
                      <td>{(recipe as any)[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <div className="row">
              <h5 style={{ margin: "2rem 0 1.5rem" }}>Video Recipe</h5>
              <iframe
                className={styles.iframe}
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
              ></iframe>
            </div>
          ) : null}
        </div>
      )}
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}
