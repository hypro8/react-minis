import React, { useContext, useState } from "react";
import cartItems from "./data";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  console.log(cartItems);
  const [cart, setCart] = useState(cartItems);

  return <AppContext.Provider value={{ cart }}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
