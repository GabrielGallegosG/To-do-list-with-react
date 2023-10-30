import "./CreateTodoButton.css";
import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";

function CreateTodoButton({ newTaskValue, setNewTaskValue }) {
  const { addTask } = React.useContext(ToDoContext);
  return (
    <div>
      <button
        className="button"
        onClick={(event) => {
          if (newTaskValue !== "") {
            addTask(newTaskValue);
            setNewTaskValue("");
            event.preventDefault();
          }
        }}
      >
        Create task
      </button>
    </div>
  );
}

export { CreateTodoButton };
