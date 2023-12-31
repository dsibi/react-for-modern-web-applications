import { useContext } from "react";
import { ShopContext } from "../../context";

function GoodsItem(props: IGoodsItem) {
  const { id, name, description, imageUrl, price } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToBasket!({ id, name, price })}
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8 rem" }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}

export default GoodsItem;
