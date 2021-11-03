import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./Context";

const Home = () => {
  // const data = useContext(AppContext);

  // * use customer useContext hook
  // const obj = useGlobalContext();
  // console.log(obj);

  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show model
      </button>
    </main>
  );
};

export default Home;
