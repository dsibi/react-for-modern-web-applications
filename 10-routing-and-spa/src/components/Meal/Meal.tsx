import { Link } from "react-router-dom";
import styles from "./Meal.module.css";

export default function Meal({ name, image, id }: IMeals) {
  return (
    <div className={styles.meal}>
      <div className={`card ${styles.card}`}>
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div className={`card-content ${styles.cardContent}`}>
          <span className="cadd-title">{name}</span>
        </div>
        <div className="card-action">
          <Link to={`/meal/${id}`} className="btn">
            Watch Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}
