import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";

function Shop() {
  const [goods, setGoods] = useState<IGoodsItem[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(function getGoods() {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.append("Authorization", API_KEY!);

    fetch(API_URL, { headers: requestHeaders })
      .then((response) => response.json())
      .then((data: IAPIResponse) => {
        if (data.shop) {
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
          }
          setGoods(responseGoods);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      {!isLoading ? <GoodsList goodsList={goods} /> : <Preloader />}
    </main>
  );
}

export default Shop;
