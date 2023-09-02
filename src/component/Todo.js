import { useState, useEffect } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

export default function Todo({ todos, completeTask, removeTask }) {
  //state to hold status based on todos props
  const [completedCount, setCompletedCount] = useState(0);
  const [incompleteCount, setIncompleteCount] = useState(0);

  //useeffect to count and filterout status of tasks
  useEffect(() => {
    const completedTodos = todos.filter((todo) => todo.iscomplete);
    const incompleteTodos = todos.filter((todo) => !todo.iscomplete);
    setCompletedCount(completedTodos.length);
    setIncompleteCount(incompleteTodos.length);
  }, [todos]);

  return (
    <>
      <div className="counters">
        <p className="compmletedFont">Completed tasks: {completedCount}</p>
        <p className="incompleteFont">Incomplete tasks: {incompleteCount}</p>
      </div>

      {todos.map((todo, index) => (
        <div
          className={todo.iscomplete ? "complete task-div" : "task-div"}
          key={index}
        >
          <div className="todo-text">{todo.text}</div>
          <div className="icons" key={todo.id}>
            <TiTick
              className={todo.iscomplete ? "hide" : "tick"}
              onClick={() => {
                completeTask(todo.id);
              }}
            ></TiTick>
            <RiCloseCircleLine
              className="cross"
              onClick={() => {
                removeTask(todo.id);
              }}
            ></RiCloseCircleLine>
          </div>
        </div>
      ))}
    </>
  );
}
