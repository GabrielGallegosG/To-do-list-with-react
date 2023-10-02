import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import "./CreateTodoButtonMobile.css";

function CreateTodoButtonMobile() {
  const {
    setOpenModal,
  } = React.useContext(ToDoContext);
  return (
    <button
      className="createTaskButtonMobile"
      onClick={() => setOpenModal((state) => !state)}
    >
      +
    </button>
  );
}

export { CreateTodoButtonMobile };
