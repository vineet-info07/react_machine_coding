import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useTodoContext } from "./context/TodoContext";

export const Todo = ({ id }) => {
  const { state, dispatch } = useTodoContext();
  const task = state.todos.find((todo) => todo.id === id);

  if (!task) return null;

  return (
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => dispatch({ type: "TOGGLE_COMPLETE", payload: id })}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => dispatch({ type: "TOGGLE_EDIT", payload: id })}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => dispatch({ type: "DELETE_TODO", payload: id })}
        />
      </div>
    </div>
  );
};
