import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../../config";
import Preloader from "../Preloader/Preloader";
import GoodsList from "../GoodsList/GoodsList";
import Basket from "../Basket/Basket";
import BasketList from "../BasketList/BasketList";
import Alert from "../Alert/Alert";

function Shop() {
  const [goods, setGoods] = useState<IGoodsItem[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [order, setOrder] = useState<IGoodsBasket[]>([]);
  const [isBasketShow, setBasketShow] = useState<boolean>(false);
  const [alertName, setAlertName] = useState<string>("");

  const addToBasket: AddToBasketFunc = (item) => {
    setOrder((order) => {
      const itemIndex = order.findIndex(
        (orderItem) => orderItem.id === item.id
      );
      if (itemIndex < 0) {
        const newItem = {
          ...item,
          quantity: 1,
        };
        return [...order, newItem];
      } else {
        const newOrders = order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
        return newOrders;
      }
    });
    setAlertName(item.name);
  };

  const removeFromBasket = (itemID: string) => {
    const newOrder = order.filter((item) => item.id !== itemID);
    setOrder(newOrder);
  };

  const increment = (itemID: string) => {
    const newOrder = order.map((el) => {
      if (el.id === itemID) {
        return {
          ...el,
          quantity: el.quantity + 1,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const decrement = (itemID: string) => {
    const newOrder = order.map((el) => {
      if (el.id === itemID) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 1 ? newQuantity : 1,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName("");
  };

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
                addToBasket: addToBasket,
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
      <Basket quantity={order.length} handleBasketShow={handleBasketShow} />
      {!isLoading ? <GoodsList goodsList={goods} /> : <Preloader />}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          increment={increment}
          decrement={decrement}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export default Shop;
