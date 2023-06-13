import "./TodoCounter.css"

function TodoCounter({ total, completed }) {
  return (
    <span id="counterText">
      You have completed {completed} of {total} tasks
    </span>
  );
}

export { TodoCounter };
