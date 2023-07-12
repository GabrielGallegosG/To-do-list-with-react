import React from "react";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/Modal";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import "./TaskForm.css";

const TaskForm = () => {
  const { openModal, setOpenModal } = React.useContext(ToDoContext);
  return (
    <>
      <span className="inputText">Task name</span>
      <input className="input" placeholder="Take a dance class" />
      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal && <Modal></Modal>}
    </>
  );
};

export { TaskForm };
