import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="context hello">{children}</AppContext.Provider>
  );
};

export const useGlobalContext = useContext(AppContext);

export { AppProvider };
