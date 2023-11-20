import { useNavigate, useParams } from "react-router-dom";
import styles from "./Category.module.css";
import { useEffect, useState } from "react";
import { getFilteredCategory } from "../../api";
import Preloader from "../../components/Preloader/Preloader";
import MealList from "../../components/MealList/MealList";
import { MapMeal } from "../../utils/mapping";

export default function Category({}) {
  const { name } = useParams<string>();
  const [meals, setMeals] = useState<IMeals[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFilteredCategory(name!).then((data) =>
      setMeals(data.meals.map((el: IAPIMeals) => MapMeal(el)))
    );
  }, [name]);

  return (
    <div className={styles.category}>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!meals ? <Preloader /> : <MealList meals={meals} />}
    </div>
  );
}
