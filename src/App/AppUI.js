import React from "react";
import "./App.css";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TasksLoading } from "../TasksLoading/TasksLoading";
import { TasksError } from "../TasksError/TasksError";
import { EmptyTasks } from "../EmptyTasks/EmptyTasks";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/Modal";
import { ToDoContext } from "../ToDoContext/ToDoContext";

const AppUI = () => {
  const { loading, error, searchedTasks, completeTask, deleteTask, openModal, setOpenModal } =
    React.useContext(ToDoContext);
  return (
    <div id="mainContainer">
      <div id="addTaskContainer">
        <span id="title">Create a new task</span>
        <span id="inputText">Task name</span>
        <input id="taskInput" placeholder="Take a dance class" />
        <div>
          <CreateTodoButton setOpenModal={setOpenModal} />
        </div>
        {openModal && <Modal></Modal>}
      </div>
      <div id="taskListContainer">
        <span id="tasksSpan">Task List</span>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {loading && <TasksLoading />}
          {error && <TasksError />}
          {!loading && searchedTasks.length === 0 && <EmptyTasks />}
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
};

export { AppUI };
