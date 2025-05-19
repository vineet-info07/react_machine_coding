import React from "react";
import { useTodoContext } from "./context/TodoContext";

export const TodoForm = () => {
  const { state, dispatch } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state.formValue.trim()) return;
    dispatch({ type: "ADD_TODO" });
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={state.formValue}
        placeholder="What is the task today?"
        onChange={(e) =>
          dispatch({ type: "SET_FORM_VALUE", payload: e.target.value })
        }
      />
      <button className="todo-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};
