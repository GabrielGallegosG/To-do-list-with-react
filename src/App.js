import React, { useState } from "react";
import { TodoCounter } from "./Components/TodoCounter/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch/TodoSearch";
import { TodoList } from "./Components/TodoList/TodoList";
import { TodoItem } from "./Components/TodoItem/TodoItem";
import { CreateTodoButton } from "./Components/CreateTodoButton/CreateTodoButton";
import "./App.css";

// const defaultTodos = [
//   { text: "Tomar el curso de React.js", completed: false },
//   { text: "Sacar a pasear al perro", completed: false },
//   { text: "Terminar el proyecto de React", completed: false },
//   { text: "Crear un perfil de LinkedIn", completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (localStorageItem) {
    parsedItem = JSON.parse(localStorageItem);
  } else {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [tasks, saveTasks] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTasks = tasks.filter((tasks) => !!tasks.completed).length;
  const totalTasks = tasks.length;

  const searchedTasks = tasks.filter((tasks) => {
    const taskText = tasks.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return taskText.includes(searchText);
  });

  const completeTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    newTasks[taskIndex].completed = true;
    saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex((task) => task.text === text);
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };

  return (
    <div id="mainContainer">
      <div id="addTaskContainer">
        <span id="title">Create a new task</span>
        <span id="inputText">Task name</span>
        <input id="taskInput" placeholder="Take a dance class" />
        <div id="buttonContainer">
          <CreateTodoButton />
        </div>
      </div>
      <div id="taskListContainer">
        <span id="tasksSpan">Task List</span>
        <TodoCounter completed={completedTasks} total={totalTasks} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

        <TodoList>
          {searchedTasks.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTask(todo.text)}
              onDelete={() => deleteTask(todo.text)}
            />
          ))}
        </TodoList>
      </div>
    </div>
  );
}

export default App;
