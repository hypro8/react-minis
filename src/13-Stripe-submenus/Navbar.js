import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { openSidebar, openSubMenu, closeSubMenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const pageName = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    console.log(tempBtn);
    openSubMenu(pageName, { center, bottom });
  };

  const handleSubMenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubMenu();
    }
  };

  return (
    <nav
      className="nav"
      style={{ border: "2px solid red" }}
      onMouseOver={handleSubMenu}
    >
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="stripe logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button
              className="link-btn"
              style={{ background: "red" }}
              onMouseOver={displaySubmenu}
            >
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
