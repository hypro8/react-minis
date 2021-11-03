import React, { useContext, useState } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubMenu = (text, coordinates) => {
    const targetPage = sublinks.find((link) => link.page === text);
    setPage(targetPage);
    console.log(targetPage);
    setLocation(coordinates);
    setIsSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubMenuOpen,
        openSidebar,
        closeSidebar,
        openSubMenu,
        closeSubMenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom Hook
export const useGlobalContext = () => useContext(AppContext);
