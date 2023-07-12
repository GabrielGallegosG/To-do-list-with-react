import "./CreateTodoButton.css";

function CreateTodoButton() {
  return <button id="createTaskButton" onClick={() => console.log("Create task button pressed")}>Create task</button>;
  // return <button id="createTaskButton" onClick={() => setOpenModal(state => !state)}>Create task</button>;
}

export { CreateTodoButton };
