import { useContext } from "react";
import GoodsItem from "../GoodsItem/GoodsItem";
import styles from "./GoodsList.module.css";
import { ShopContext } from "../../context";
import { JSX } from "react/jsx-runtime";

function GoodsList() {
  const { goodsList=[] } = useContext(ShopContext);

  if (!goodsList.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className={styles.goods}>
      {goodsList.map((item: JSX.IntrinsicAttributes & IGoodsItem) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default GoodsList;
