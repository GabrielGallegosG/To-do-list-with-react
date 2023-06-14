import "./CreateTodoButton.css";

function CreateTodoButton() {
  return <button id="createTaskButton" onClick={() => console.log("Create task button pressed")}>Create task</button>;
}

export { CreateTodoButton };
