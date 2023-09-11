import React from "react";
import "./AppUI.css";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskListContainer } from "../TaskListContainer/TaskListContainer";
import { CreateTodoButtonMobile } from "../CreateTodoButtonMobile/CreateTodoButtonMobile";
import { Modal } from "../Modal/Modal";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import { TodoFormMobile } from "../TodoFormMobile/TodoFormMobile";

const AppUI = () => {
  const { openModal, setOpenModal } = React.useContext(ToDoContext);
  return (
    <div className="screen">
      <div className="createTaskContainer">
        <span className="title">Create a new task</span>
        <TaskForm />
      </div>
      <TaskListContainer />
      <CreateTodoButtonMobile setOpenModal={setOpenModal} />
      {openModal && <Modal>
        <TodoFormMobile />
        </Modal>}
    </div>
  );
};

export { AppUI };
