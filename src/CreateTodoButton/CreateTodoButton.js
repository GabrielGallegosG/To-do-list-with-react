import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <div>
      <button
        className="button"
        onClick={() => console.log("Create task button pressed")}
      >
        Create task
      </button>
    </div>
  );
  // return <button id="createTaskButton" onClick={() => setOpenModal(state => !state)}>Create task</button>;
}

export { CreateTodoButton };
