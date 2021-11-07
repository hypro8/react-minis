import React, { useContext, useReducer } from "react";
import { AppContext } from "../14-cart/context";
import { useGlobalContext } from "../context";

const AppConext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppConext.Provider value="hello">{children}</AppConext.Provider>;
};

export const useGlobalContext = useContext(AppContext);

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppConext.Provider value="hello">{children}</AppConext.Provider>;
};

export const useGlobalContext = useContext(AppContext);

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

export const useGlobalContext = useContext(AppContext);

export { AppProvider };
