import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import "./TaskForm.css";
import owlImage from "../img/buho2.png";

const TaskForm = () => {
  const [newTaskValue, setNewTaskValue] = React.useState("");
  return (
    <>
      <span className="inputText">Task name</span>
      <input
        className="input"
        placeholder="Take a dance class"
        value={newTaskValue}
        onChange={(event) => setNewTaskValue(event.target.value)}
      />
      <CreateTodoButton newTaskValue={newTaskValue} setNewTaskValue={setNewTaskValue} />
      <div className="imageContainer">
        <img className="img" src={owlImage} alt="owl" />
      </div>
    </>
  );
};

export { TaskForm };
