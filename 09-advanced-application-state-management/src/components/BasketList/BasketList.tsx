import { useContext } from "react";
import BasketItem from "../BasketItem/BasketItem";
import styles from "./BasketList.module.css";
import { ShopContext } from "../../context";
import { JSX } from "react/jsx-runtime";

function BasketList() {
  const { order = [], handleBasketShow } = useContext(ShopContext);

  const totalPrice = order.reduce((sum: number, item: { price: number; quantity: number; }) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <ul className={styles.basketList}>
      <li
        className="header teal lighten-2"
        style={{ fontWeight: "bold", color: "white", padding: ".5rem" }}
      >
        Корзина
      </li>
      {order.length ? (
        order.map((item: JSX.IntrinsicAttributes & IGoodsBasket) => (
          <BasketItem
            key={item.id}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item" style={{ padding: ".5rem" }}>
          Корзина пуста
        </li>
      )}

      <li
        className="header teal lighten-2"
        style={{ fontWeight: "bold", color: "white", padding: ".5rem" }}
      >
        Общая стоимость: {totalPrice} руб.
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
      <button className=" right btn-small">Оформить</button>
    </ul>
  );
}

export default BasketList;
