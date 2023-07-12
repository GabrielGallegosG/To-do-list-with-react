import React from "react";
import "./AppUI.css";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskListContainer } from "../TaskListContainer/TaskListContainer";

const AppUI = () => {
  return (
    <div className="screen">
      <div className="createTaskContainer">
        <span className="title">Create a new task</span>
        <TaskForm />
      </div>
      <TaskListContainer />
    </div>
  );
};

export { AppUI };
