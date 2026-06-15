import ToDoItem from './ToDoItem';

const ToDoList = ({todos, toggleTodo, deleteTodo }) => {
    return (
        <ul className="todo-list" style={ {'list-style-type': 'none',padding:0,margin: 0}}>
            {todos.map((todo) => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />

            ))}
        </ul>
    );
        
}

export default ToDoList;