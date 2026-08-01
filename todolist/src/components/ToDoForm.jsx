import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo} from './ToDoSlice';

const ToDoForm =  () => {
    const [todoText, setTodoText] = useState('');
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!todo.trim()) return; // Prevent adding empty tasks
    //     addTodo(todo);
    //     setTodo('');
    // };
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todoText.trim()) return;
        dispatch(addTodo(todoText));
        setTodoText('');
    };

    return(
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                id="todo"
                name="todo"
                placeholder="Add a new task..."
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );

};

export default ToDoForm;