// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
function App(){
  return (
<div>
   <h1>Todo APP</h1>
   <TodoForm></TodoForm>
   <TodoList></TodoList>



</div>
   
  )
}
export default App;
