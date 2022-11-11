import { useRef, FormEvent } from "react";
import "./NewTodo.css";

interface NewTodoProps {
  onAddTodo: (text: string) => void;
}

function NewTodo({ onAddTodo }: NewTodoProps) {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText) {
      onAddTodo(enteredText.trim());
      textInputRef.current!.value = "";
    }
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
}

export default NewTodo;
