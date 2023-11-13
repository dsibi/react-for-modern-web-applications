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
