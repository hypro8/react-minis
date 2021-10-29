import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import List from "./List";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function GroceryBudApp() {
  const [singleItemName, setSingleItemName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  // console.log("list in App.js: ", list);
  // console.log("alert in App: ", alert);

  const handleSubmit = (e) => {
    e.preventDefault(); // ! remember add this
    // console.log("submit clicked");

    if (!singleItemName) {
      makeAlert(true, "Please input your item", "danger");
      // return;
    } else if (singleItemName && isEditing) {
      const newList = list.map((item) => {
        if (item.id === editID) {
          return { ...item, title: singleItemName };
        } else {
          return item;
        }
      });
      setList(newList);
      setIsEditing(false);
      setEditID(null);
      setSingleItemName("");
      makeAlert(true, "Edited item updated", "success");
    } else {
      addItemToList(singleItemName);
      makeAlert(true, "item added successfully", "success");
    }
  };

  // localstorage (hook with local storage, always save when list is updated)
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
    console.log("localstorage get item", localStorage.getItem("list"));
  }, [list]);

  const clearList = () => {
    setList([]);
    setSingleItemName("");
    setEditID(null);
    setIsEditing(false);
    makeAlert(true, "all items are cleared", "danger");
  };

  const editItem = (id) => {
    const selectedItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(selectedItem.id);
    setSingleItemName(selectedItem.title);
  };

  const deleteItem = (id) => {
    if (list.length > 0) {
      const newList = list.filter((item) => item.id !== id);
      setList(newList);
      makeAlert(true, "item deleted", "danger");
    }
  };

  const makeAlert = (show = false, msg = "", type = "") => {
    const newObj = { show, msg, type };
    setAlert(newObj);
  };

  // easy way to generate unique IDs
  const generatedID = new Date().getTime().toString();

  // add a new grocery item to the entire grocery list
  const addItemToList = (itemName) => {
    const newListItem = { id: generatedID, title: singleItemName };
    setList([...list, newListItem]);
    setSingleItemName("");
  };

  return (
    <section className="section-center">
      <div className="grocery-container">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert alert={alert} list={list} resetAlert2Default={makeAlert} />
          )}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="greocery"
              onChange={(e) => setSingleItemName(e.target.value)}
              value={singleItemName}
              placeholder="eg. eggs.."
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>

        {list.length > 0 && (
          <List items={list} deleteItem={deleteItem} editItem={editItem} />
        )}
        <button className="clear-btn" onClick={clearList}>
          clear items
        </button>
      </div>
    </section>
  );
}

export default GroceryBudApp;
