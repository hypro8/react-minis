import React, { useState } from "react";
import Categories from "./Categories";
import items from "./data";
import Menu from "./Menu";

// ? extract raw values from "categories" in items data
const allCategories_raw = items.map((item) => item.category);

// ? get unique values of all categoies using new Set (return an Object)
// * RETURN: Set(3) {'breakfast', 'lunch', 'shakes'}
const allCategories_object = new Set(allCategories_raw);

// ? change allCategories Object to an array
// * RETURN: (4) ['all', 'breakfast', 'lunch', 'shakes']
const allCategories = ["all", ...allCategories_object];

console.log(allCategories);

function MenuApp() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MenuApp;
