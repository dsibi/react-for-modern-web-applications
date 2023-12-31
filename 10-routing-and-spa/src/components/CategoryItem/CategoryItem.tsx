import { Link } from "react-router-dom";
import styles from "./CategoryItem.module.css";

export default function CategoryItem({ name, image, desc }: ICategory) {
  return (
    <div className={styles.categoryItem}>
      <div className={`card ${styles.card}`}>
        <div className="card-image">
          <img src={image} alt={name} />
          <span className="card-title">{name}</span>
        </div>
        <div className={`card-content ${styles.cardContent}`}>
          <p>{desc.slice(0, 90)}...</p>
        </div>
        <div className="card-action">
          <Link to={`category/${name}`} className="btn">
            Watch Category
          </Link>
        </div>
      </div>
    </div>
  );
}
