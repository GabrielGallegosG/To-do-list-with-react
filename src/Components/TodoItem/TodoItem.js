import "./TodoItem.css"

function TodoItem(props) {
  return (
    <li id="toDoItem">
      <span>V</span>
      <p>{props.text}</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };