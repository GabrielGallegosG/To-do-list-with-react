import "./TodoItem.css";
import { FiTrash2 } from "react-icons/fi";
import { FiCircle } from "react-icons/fi";

function TodoItem(props) {
  return (
    <li id="toDoItem">
      <FiCircle size={24} onClick={props.onComplete} />
      <p>{props.text}</p>
      <FiTrash2 size={24} onClick={props.onDelete} />
    </li>
  );
}

export { TodoItem };
