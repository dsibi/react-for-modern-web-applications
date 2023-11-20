import CategoryItem from "../CategoryItem/CategoryItem";
import styles from "./CategoryList.module.css";

export default function CategoryList({ catalog = [] }: ICatalog) {

  return (
      <div className={styles.categoryList}>
        {catalog.map((category) => (
          <CategoryItem key={category.id} {...category} />
        ))}
      </div>
  );
}
