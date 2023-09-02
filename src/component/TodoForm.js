import React, { useState } from "react";

export default function TodoForm(props) {
    const [input, setInput] = useState('');
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask({
      id: Math.floor(Math.random() * 100000),
      text: input,
      isCompelte: false,
    });
      setInput('')
  };
    return (
        <>
      <center><p className="tittle">My To Do List</p></center>
      <form className="todo-form">
      <input type="text" className="todo-input" placeholder="Type task title here......" value={input} name="text" onChange={handleChange} />
      <button type="submit" className="add-btn" onClick={handleSubmit}>
        Add
      </button>
            </form>
        </>
  );
}
