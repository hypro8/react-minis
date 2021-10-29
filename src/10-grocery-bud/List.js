import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, deleteItem, editItem }) => {
  console.log("list in List.js: ", items);

  return items.map((item) => {
    return (
      <article className="grocery-item">
        <p key={item.id}>{item.title}</p>
        <div className="btn-container">
          <button className="edit-btn" onClick={() => editItem(item.id)}>
            <FaEdit />
          </button>
          <button className="delete-btn" onClick={() => deleteItem(item.id)}>
            <FaTrash />
          </button>
        </div>
      </article>
    );
  });
};

export default List;
