import ToDoForm from'./components/ToDoForm';
import ToDoList from './components/ToDoList';
import './App.css'

function App() {

  // const addTodo = (text) => {
    
  //   const newTodo = {
  //     id: Date.now(),
  //     text: text,
  //     completed: false,
  //   };
  //   setTodos([...todos, newTodo]);
  // }; 

  // const toggleTodo = (id) => {
  //   setTodos(
  //     todos.map((todo) => 
  //     todo.id === id ? { ...todo, completed: !todo.compelted }: todo
  //     )
  //   );
  // };

  // const deleteTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  return (
    <main className="todo-app">
      <h1>To Do List</h1>
      <ToDoForm />
      <ToDoList />
    </main>
  );
}


export default App;
