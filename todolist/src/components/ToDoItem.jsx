import { useDispatch } from 'react-redux';
import {deleteTodo} from './ToDoSlice';
import './Components.css';
import { Divider, List, ListItem, ListItemButton, ToggleButton, Box} from '@mui/material';

const ToDoItem = ({todo}) => {
    const dispatch = useDispatch();
 


    // const handleToggleTodo = (todoId) => {
    //     dispatch(toggleTodo(todoId));
    // }


    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    }
    return (
        <Box sx={{maxWidth: 360}}>
            <List>
                <Divider aria-hidden="true"/>
                <ListItem>
                    <ListItemButton>
                        <ToggleButton
                        value="check"></ToggleButton>
                    </ListItemButton>
                    <ListItemButton type="text" onClick={() => handleDeleteTodo(todo.id)} className="delete-item-btn">
                        Delete
                    </ListItemButton>
                </ListItem>
                <Divider aria-hidden="true"/>
            </List>
        </Box>
        
    );
};

export default ToDoItem;