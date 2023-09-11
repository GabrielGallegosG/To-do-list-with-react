import "./CreateTodoButtonMobile.css";

function CreateTodoButtonMobile(setOpenModal) {
  return (
    <button
      className="createTaskButtonMobile"
      onClick={() => setOpenModal.setOpenModal((state) => !state)}
    >
      +
    </button>
  );
}

export { CreateTodoButtonMobile };
