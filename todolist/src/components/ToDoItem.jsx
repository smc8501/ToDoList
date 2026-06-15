

const ToDoItem = ({todo, toggleTodo, deleteTodo}) => {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span
                onClick={() => toggleTodo(todo.id)}
                style={{ textDecoration: todo.completed ? 'line-through': 'none', cursor: 'pointer'}}>
                    {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                Delete
            </button>
        </li>
    );
}

export default ToDoItem;