import "./TodoSearch.css"

function TodoSearch() {
  return <input id="taskInput" placeholder="Search for a task" onChange={(event) => console.log(event.target.value)} />;
}

export { TodoSearch };
