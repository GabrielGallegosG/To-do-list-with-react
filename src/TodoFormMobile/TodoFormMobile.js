import React from "react";
import "./TodoFormMobile.css";
import { ToDoContext } from "../ToDoContext/ToDoContext";

function TodoFormMobile() {
  const [newTaskValue, setNewTaskValue] = React.useState();

  const { setOpenModal, addTask } = React.useContext(ToDoContext);

  const onCancel = () => setOpenModal(false);

  const onSubmit = (event) => {
    if (newTaskValue !== "") {
      addTask(newTaskValue);
      event.preventDefault();
      setOpenModal(false);
    }
  };

  const onChange = (event) => {
    setNewTaskValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add a new task</label>
      <textarea
        placeholder="Take a dance class"
        value={newTaskValue}
        onChange={onChange}
      />
      <div className="TodoFormMobile-buttonContainer">
        <button
          type=""
          className="TodoFormMobile-button TodoFormMobile-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="TodoFormMobile-button TodoFormMobile-button--add"
        >
          Add task
        </button>
      </div>
    </form>
  );
}

export { TodoFormMobile };
