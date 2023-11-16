import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { getAllCategories } from "../../api";
import Preloader from "../../components/Preloader/Preloader";
import CategoryList from "../../components/CategoryList/CategoryList";
import { MapCategory } from "../../utils/extractLocalCategory";

export default function Home({}) {
  const [catalog, setCatalog] = useState<ICategory[]>([]);

  useEffect(() => {
    getAllCategories().then((data: IAPICategories) => {
      setCatalog(data.categories.map((el) => MapCategory(el)));
    });
  }, []);

  return (
    <>{!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}</>
  );
  // <h1 className={styles.home}>Hello from HomePage!</h1>
  //
}
