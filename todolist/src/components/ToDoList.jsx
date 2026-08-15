import ToDoItem from './ToDoItem';
import { useSelector } from 'react-redux';
import './Components.css';
import { List } from '@mui/material';

const ToDoList = () => {
    const todoItems = useSelector(state => state.todos.todos);

    if (todoItems.length === 0){
        return (
            <div className="todo-empty-state" style={{textAlign: 'center', padding: '20px', color: '#666'}}>
                <p> All done! Add a new task to get started.</p>
            </div>
        );
    }
    return (
        
        <List className="todo-list" style={ {'listStyleType': 'none',padding:0,margin: 0}}>
            {todoItems.map((todoItem) => (
                    <ToDoItem
                    key={todoItem.id}
                    todo={todoItem}
                    />
            ))}
        </List>
       
        
    );
        
};

export default ToDoList;