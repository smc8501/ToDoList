import  { useState } from 'react';

const ToDoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todo.trim()) return; // Prevent adding empty tasks
        addTodo(todo);
        setTodo('');
    };

    return(
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                placeholder="Add a new task..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );

}

export default ToDoForm;