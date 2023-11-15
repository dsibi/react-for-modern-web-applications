/// <reference types="react-scripts" />

interface IAPIResponse {
  shop: {
    granted: {
      id: string;
      name: string;
      description: string;
      images: {
        full_background: string;
      };
    }[];
    price: { regularPrice: number };
  }[];
}

interface IGoodsItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface IGoodsList {
  goodsList: IGoodsItem[];
}

interface IGoodsBasket {
  id: string;
  name: string;
  price: number;
  quantity: number;
  removeFromBasket: (itemID: string) => MouseEventHandler<HTMLElement>;
  increment: (itemID: string) => MouseEventHandler<HTMLElement>;
  decrement: (itemID: string) => MouseEventHandler<HTMLElement>;
}

interface IGoodsBasketList {
  order: IGoodsBasket[];
  handleBasketShow: () => void;
  removeFromBasket: (itemID: string) => MouseEventHandler<HTMLElement>;
  increment: (itemID: string) => MouseEventHandler<HTMLElement>;
  decrement: (itemID: string) => MouseEventHandler<HTMLElement>;
}

type AddToBasketFunc = (item: IGoodsBasket) => MouseEventHandler<HTMLElement>;

interface IBasketProps {
  quantity: number;
  handleBasketShow: () => MouseEventHandler<HTMLElement>;
}

interface IAlert {
  name: string;
  closeAlert: () => void;
}
