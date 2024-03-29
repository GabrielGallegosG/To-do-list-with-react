import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

const ToDoProvider = ({ children }) => {
  const {
    item: tasks,
    saveItem: saveTasks,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTasks = tasks.filter((tasks) => !!tasks.completed).length;
  const totalTasks = tasks.length;

  const searchedTasks = tasks.filter((tasks) => {
    const taskText = tasks.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return taskText.includes(searchText);
  });

  const addTask = (text) => {
    if (!tasks.some((task) => task.text === text)) {
      const newTasks = [...tasks];
      newTasks.push({
        text,
        completed: false,
      });
      saveTasks(newTasks);
    } else {
      
    }
  };

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
    <ToDoContext.Provider
      value={{
        loading,
        error,
        completedTasks,
        totalTasks,
        searchValue,
        setSearchValue,
        searchedTasks,
        addTask,
        completeTask,
        deleteTask,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoContext, ToDoProvider };
