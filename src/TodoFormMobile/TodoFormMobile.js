import React from "react";
import "./TodoFormMobile.css"

function TodoFormMobile(setOpenModal) {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
    }}>
      <label>Add a new task</label>
      <textarea placeholder="Take a dance class" />
      <div className="TodoFormMobile-buttonContainer">
        <button type="" className="TodoFormMobile-button TodoFormMobile-button--cancel" onClick={() => setOpenModal.setOpenModal((state) => !state)}>
          Cancel
        </button>
        <button type="submit" className="TodoFormMobile-button TodoFormMobile-button--add">
          Add task
        </button>
      </div>
    </form>
  );
}

export { TodoFormMobile };
