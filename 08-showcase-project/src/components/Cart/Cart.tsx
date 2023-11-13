import styles from "./Cart.module.css";

function Cart(props: ICart) {
  const { quantity = 0 } = props;

  return (
    <div className={styles.cart + " teal lighten-2 white-text"}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export default Cart;
