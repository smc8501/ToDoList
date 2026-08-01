import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './ToDoSlice';
const ToDoItem = ({todo}) => {
    const dispatch = useDispatch();
    // const [isEditing, setIsEditing] = useState(false);

    // const handleSave = () => {
    //     if (editText.trim()) return;
    //     dispatch(updateTodo({ id: todo.id, text: editText, completed: false}));
    //     setIsEditing(false);
    // };

    const handleToggleTodo = (todoId) => {
        dispatch(toggleTodo(todoId));
    }


    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    }
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        
    
            <div>
            
                <span
                    onClick={() => handleToggleTodo(todo.id)}
                    style={{ textDecoration: todo.completed ? 'line-through': 'none', cursor: 'pointer'}}>
                        {todo.text}
                </span>
                <button type="text" onClick={() => handleDeleteTodo(todo.id)} className="delete-item-btn">
                    Delete
                </button>
                    
            </div>

        </li>
        
    );
};

export default ToDoItem;