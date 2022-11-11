import "./TodoList.css";
import { Todo } from "../todo.model";

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
}

function TodoList({ items, onDeleteTodo }: TodoListProps) {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => onDeleteTodo(todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
