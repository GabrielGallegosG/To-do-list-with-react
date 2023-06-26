import "./TodoItem.css";
import { FiCircle, FiCheckCircle, FiTrash2 } from "react-icons/fi";

function TodoItem(props) {
  return (
    <li id="toDoItem">
      {props.completed ? (
        <FiCheckCircle size={24} onClick={props.onComplete} />
      ) : (
        <FiCircle size={24} onClick={props.onComplete} />
      )}
      <p className={props.completed && "task-checked"}>{props.text}</p>
      <FiTrash2 size={24} onClick={props.onDelete} />
    </li>
  );
}

export { TodoItem };
