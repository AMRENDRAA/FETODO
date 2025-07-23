import axios from 'axios';

const API_URL="http:localhost:3001/api/todos";
//GET ALL ID 


export  const getTodos=()=>{

    return axios.get(API_URL);
}

export const createTodo = (todoData) => {
  return axios.post(API_URL, todoData);
};

// Update a todo by ID
export const updateTodo = (id, updatedData) => {
  return axios.put(`${API_URL}/${id}`, updatedData);
};

// Delete a todo by ID
export const deleteTodo = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};