import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

const initialState = {
  todos: [],
  formValue: "",
  editValues: {},
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_FORM_VALUE":
      return { ...state, formValue: action.payload };
    case "RESET_FORM":
      return { ...state, formValue: "" };
    case "SET_EDIT_VALUE":
      return {
        ...state,
        editValues: {
          ...state.editValues,
          [action.payload.id]: action.payload.value,
        },
      };
    case "RESET_EDIT_VALUE": {
      const updatedEditValues = { ...state.editValues };
      delete updatedEditValues[action.payload];
      return { ...state, editValues: updatedEditValues };
    }
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: uuidv4(),
            task: state.formValue,
            completed: false,
            isEditing: false,
          },
        ],
        formValue: "",
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_EDIT":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isEditing: !todo.isEditing }
            : todo
        ),
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                task: state.editValues[action.payload.id],
                isEditing: false,
              }
            : todo
        ),
        editValues: Object.fromEntries(
          Object.entries(state.editValues).filter(
            ([key]) => key !== action.payload.id
          )
        ),
      };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
