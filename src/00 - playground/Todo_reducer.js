import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "add-todo",
  DECREMENT: "decrement",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.DECREMENT:
    // return { count: state.count - 1 };
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function TodoReducerApp() {
  const [name, setName] = useState("");

  // ! useReducer(reducer, initialState)
  const [todos, dispatch] = useReducer(reducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  console.log(todos);
  return (
    <>
      <form submit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        {/* <button type="submit">submit</button> */}
      </form>
    </>
  );
}

export default TodoReducerApp;
