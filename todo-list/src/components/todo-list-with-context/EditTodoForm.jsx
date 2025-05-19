import React from "react";
import { useTodoContext } from "./context/TodoContext";

export const EditTodoForm = ({ id }) => {
  const { state, dispatch } = useTodoContext();
  const value =
    state.editValues[id] ??
    state.todos.find((todo) => todo.id === id)?.task ??
    "";

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT_TODO", payload: { id } });
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task"
        onChange={(e) =>
          dispatch({
            type: "SET_EDIT_VALUE",
            payload: { id, value: e.target.value },
          })
        }
      />
      <button className="todo-btn" type="submit">
        Update Task
      </button>
    </form>
  );
};
