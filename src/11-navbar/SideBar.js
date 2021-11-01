import React from "react";
import { links } from "./data";

const SideBar = () => {
  return (
    <>
      <h3>side bar</h3>
      <div className="links-container show-container">
        <ul className="links">
          {links.map((item) => {
            const { id, url, text } = item;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
