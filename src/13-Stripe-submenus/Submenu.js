import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "./Context";

const SubMenu = () => {
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null); // ! default value of useRef is not {}

  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2"); // !
    const submenu = container.current; // !
    const { center, bottom } = location;

    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);

  return (
    <aside
      className={`${isSubMenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
      {/* {page.map(item)} */}
    </aside>
  );
};

export default SubMenu;
