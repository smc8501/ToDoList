import { useState } from 'react';
import ToDoForm from'./components/ToDoForm';
import ToDoList from './components/ToDoList';
import './App.css'
import UserRegistration from './components/UserRegistration';

function App() {
  const [todos, setTodos] = useState([]);
  // const [registeredUser, setRegisteredUser] = useState(false);

  const addTodo = (text) => {
    
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }; 

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => 
      todo.id === id ? { ...todo, completed: !todo.compelted }: todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  

  return (
    <main className="todo-app">
      {/* If user registered then show Task List and Form, else show the create an account component */}

      <UserRegistration/>

      
      <ToDoForm addTodo={addTodo} />
      {todos.length > 0 ? (
        <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ) : (
        <p className="empty-message">No Tasks</p>
      )}
    </main>
  );
}


export default App;
