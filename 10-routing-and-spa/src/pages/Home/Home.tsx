import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { getAllCategories } from "../../api";
import Preloader from "../../components/Preloader/Preloader";
import CategoryList from "../../components/CategoryList/CategoryList";
import { MapCategory } from "../../utils/mapping";
import Search from "../../components/Search/Search";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home({}) {
  const [catalog, setCatalog] = useState<ICategory[]>([]);
  const [filteredCatalog, setFilteredCatalog] = useState<ICategory[]>([]);
  const { search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str: string) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.name.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate(`?search=${str}`);
  };

  useEffect(() => {
    getAllCategories().then((data: IAPICategories) => {
      setCatalog(data.categories.map((el) => MapCategory(el)));
      setFilteredCatalog(
        search
          ? data.categories
              .map((el) => MapCategory(el))
              .filter((item) =>
                item.name
                  .toLowerCase()
                  .includes(search.split("=")[1].toLowerCase())
              )
          : data.categories.map((el) => MapCategory(el))
      );
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
  // <h1 className={styles.home}>Hello from HomePage!</h1>
  //
}
