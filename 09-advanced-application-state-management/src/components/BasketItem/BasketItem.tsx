import { useContext } from "react";
import { ShopContext } from "../../context";

function BasketItem({ id, name, price, quantity }: IGoodsBasket) {
  const { removeFromBasket, increment, decrement } = useContext(ShopContext);

  return (
    <>
      <li className="collection-item " style={{ padding: ".5rem" }}>
        {name} X{" "}
        <i
          className="material-icons basket-quantity"
          onClick={() => decrement(id)}
        >
          remove
        </i>
        {quantity}{" "}
        <i
          className="material-icons basket-quantity"
          onClick={() => increment(id)}
        >
          add
        </i>
        = {price * quantity} руб.
        <span
          className="secondary-content"
          onClick={() => removeFromBasket(id)}
        >
          <i className="material-icons basket-delete">close</i>
        </span>
      </li>
      <hr />
    </>
  );
}

export default BasketItem;
