import React from "react";
import "./TodoFormMobile.css"

function TodoFormMobile() {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
    }}>
      <label>Add a new task</label>
      <textarea placeholder="Take a dance class" />
      <div className="TodoFormMobile-buttonContainer">
        <button type="" className="TodoFormMobile-button TodoFormMobile-button--cancel">
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
