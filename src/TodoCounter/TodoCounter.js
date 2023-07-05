import { useContext } from "react";
import "./TodoCounter.css";
import { ToDoContext } from "../ToDoContext/ToDoContext";

function TodoCounter() {
  const { completedTasks, totalTasks } = useContext(ToDoContext);

  return (
    <span id="counterText">
      You have completed {completedTasks} of {totalTasks} tasks
    </span>
  );
}

export { TodoCounter };
