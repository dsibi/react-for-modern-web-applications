import Meal from "../Meal/Meal";
import styles from "./MealList.module.css";

export default function MealList({ meals = [] }: ICategoryMeals) {
  return (
    <div className={`list ${styles.mealList}`}>
      {meals.map((meal) => (
        <Meal key={meal.id} {...meal} />
      ))}
    </div>
  );
}
