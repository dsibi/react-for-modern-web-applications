import styles from "./Basket.module.css";

function Basket(props: IBasketProps) {
  const { quantity = 0, handleBasketShow } = props;

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
