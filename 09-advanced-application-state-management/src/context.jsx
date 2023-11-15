import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  value.addToBasket = (item) => {
    dispatch({ type: "ADD_TO_BASKET", payload: item });
  };

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.handleBasketShow = () => {
    dispatch({ type: "HANDLE_BASKET_SHOW" });
  };

  value.increment = (itemID) => {
    dispatch({ type: "INCREMENT", payload: { id: itemID } });
  };

  value.decrement = (itemID) => {
    dispatch({ type: "DECREMENT", payload: { id: itemID } });
  };

  value.removeFromBasket = (itemID) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: itemID } });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
