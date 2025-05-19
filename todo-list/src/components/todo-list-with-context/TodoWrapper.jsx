import { useTodoContext } from "./context/TodoContext";
import { EditTodoForm } from "./EditTodoForm";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";

export const TodoWrapper = () => {
  const { state } = useTodoContext();

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm />
      {state.todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} id={todo.id} />
        ) : (
          <Todo key={todo.id} id={todo.id} />
        )
      )}
    </div>
  );
};
