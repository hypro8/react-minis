import React, { useState } from "react";
import items from "./data";

function Menu() {
  const [menuItems, setMenuItems] = useState(items);
  return <h1>menu</h1>;
}

export default Menu;
