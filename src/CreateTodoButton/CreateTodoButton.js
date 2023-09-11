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
}

export { CreateTodoButton };
