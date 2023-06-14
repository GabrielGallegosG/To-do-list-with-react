import { TodoCounter } from "./Components/TodoCounter/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton/CreateTodoButton";
import "./App.css";

const defaultTodos = [
  { text: "Tomar el curso de React.js", completed: false },
  { text: "Sacar a pasear al perro", completed: false },
  { text: "Terminar el proyecto de React", completed: false },
  { text: "Crear un perfil de LinkedIn", completed: false },
];

function App() {
  return (
    <>
      <div id="addTaskContainer">
        <span id="title">Create a new task</span>
        <span id="inputText">Task name</span>
        <input id="taskInput" placeholder="Take a dance class" />
        <CreateTodoButton />
      </div>
      <div id="taskListContainer">
        <span id="tasksSpan">Task List</span>
        <TodoCounter completed={16} total={25} />
        <TodoSearch />

        <TodoList>
          {defaultTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
      </div>
    </>
  );
}

export default App;
