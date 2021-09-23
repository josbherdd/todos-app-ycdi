import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Describe tu proximo logro!</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="cut something for the almuerzo"
      />

      <div className="TodoForm-buttonContainer">
        <button 
        type="button" 
        onClick={onCancel}
        className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button 
        type="submit"
        className="TodoForm-button TodoForm-button-add"
        >Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
