import React, { useState, useEffect } from "react";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("https://ormtodo.onrender.com/api/todos");
      console.log(res.data.data);
      setTodos(res.data.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch todos");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleToggle = async (id, isCompleted) => {
    try {
      await axios.put(`https://ormtodo.onrender.com/api/todos/${id}`, {
        isCompleted: !isCompleted,
      });
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://ormtodo.onrender.com/api/todos/${id}`);
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>
          {todo.task} - {todo.date}
          <button onClick={() => handleToggle(todo.id, todo.isCompleted)}>
            Mark as {todo.isCompleted ? "Incomplete" : "Complete"}
          </button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li> 
       ))}
    </ul>
  );
}

export default TodoList;
