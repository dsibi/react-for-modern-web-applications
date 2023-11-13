import GoodsItem from "./GoodsItem";

function GoodsList(props: IGoodsList) {
  const { goodsList } = props;

  if (!goodsList.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="goods">
      {goodsList.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default GoodsList;
