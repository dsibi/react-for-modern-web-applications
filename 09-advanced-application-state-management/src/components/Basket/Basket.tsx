import { useContext } from "react";
import styles from "./Basket.module.css";
import { ShopContext } from "../../context";

function Basket() {
  const {order, handleBasketShow} = useContext(ShopContext);

  const quantity = order.length;

  return (
    <div
      className={styles.basket + " teal lighten-2 white-text"}
      onClick={handleBasketShow}
    >
      <i className="material-icons">shopping_basket</i>
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
}

export default Basket;
