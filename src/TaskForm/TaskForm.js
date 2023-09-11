import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import "./TaskForm.css";

const TaskForm = () => {
  return (
    <>
      <span className="inputText">Task name</span>
      <input className="input" placeholder="Take a dance class" />
      <CreateTodoButton />
    </>
  );
};

export { TaskForm };
