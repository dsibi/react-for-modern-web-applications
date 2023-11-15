import { useContext, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";
import Preloader from "../Preloader/Preloader";
import GoodsList from "../GoodsList/GoodsList";
import Basket from "../Basket/Basket";
import BasketList from "../BasketList/BasketList";
import Alert from "../Alert/Alert";
import { ShopContext } from "../../context";

function Shop() {
  const { isLoading, isBasketShow, alertName, setGoods } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.append("Authorization", API_KEY!);

    fetch(API_URL, { headers: requestHeaders })
      .then((response) => response.json())
      .then((data: IAPIResponse) => {
        let len = data.shop.length;
        const responseGoods: IGoodsItem[] = [];
        for (let i = 0; i < len; i++) {
          let itemSet = data.shop[i];
          let iLen = itemSet.granted.length;
          for (let j = 0; j < iLen; j++) {
            let item = itemSet.granted[j];
            let goodsItem: IGoodsItem = {
              id: item.id,
              description: item.description,
              price: itemSet.price.regularPrice,
              imageUrl: item.images.full_background,
              name: item.name,
            };
            responseGoods.push(goodsItem);
          }
          setGoods(responseGoods);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="container content">
      <Basket />
      {!isLoading ? <GoodsList /> : <Preloader />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}

export default Shop;
