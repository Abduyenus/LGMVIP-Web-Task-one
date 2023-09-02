import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const addTask = (task) => {
    if (!task.text) {
      return; //if the task is empty do nothing and return out of this method
    }
    const newTodos = [task, ...todos];
    setTodos(newTodos);

  };

  // Remove todo from list
  const removeTask = (id) => {
    let updatedTasks = [...todos].filter((task) => task.id !== id);
    setTodos(updatedTasks);
  };

    //completed tasks
    const completeTask = (id) => {
        let updatedTasks = todos.map(todo => {
            if (todo.id === id) {
                todo.iscomplete = true
            }
            return todo
        })
        setTodos(updatedTasks)
    }
    
  return (
    <div>
          <TodoForm addTask={addTask} />
          <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} />
    </div>
  );
}
