import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {toggleTodo, deleteTodo, setPriority, Priority} from './ToDoSlice';
import './Components.css';
import { Divider, List, ListItem, ListItemButton, Checkbox, Box, Typography, Menu, Chip, MenuItem} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const priorityColours = {
    [Priority.LOW]: 'success',
    [Priority.MEDIUM]: 'warning',
    [Priority.HIGH]: 'error'
}

const ToDoItem = ({todo}) => {
    
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleChipClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
 
    const handleSetPriority = (todoPriority) => {
        handleMenuClose();
        dispatch(setPriority({id: todo.id, newPriority: todoPriority}));
    };

    const handleToggleTodo = (todoId) => {
        dispatch(toggleTodo(todoId));
    };


    const handleDeleteTodo = (todoId) => {
        dispatch(deleteTodo(todoId));
    };
    const currentPriority = todo?.priority || "Priority";
 
    return (
            <List sx="medium">
                <ListItem disablePadding>
                    <ListItemButton>
                        <Checkbox
                        onChange={() => handleToggleTodo(todo.id)}
                        />
                    </ListItemButton>
                    <Box sx="small">
                        <Typography variant="h6" sx={{ flexGrow: 1}}>{todo.text}</Typography>

                    </Box>
                    <Chip
                        label={currentPriority.toUpperCase()}
                        color={priorityColours[currentPriority] || 'default'}
                        size="small"
                        onClick={handleChipClick}
                        deleteIcon={<KeyboardArrowDownIcon/>}
                        onDelete={handleChipClick}
                        sx={{
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            '& .MuiChip-deleteIcon': {
                                color: 'inherit',
                                marginLeft: 'auto',
                                marginRight: 2,

                            }
                        }}
                        />
                        <Menu
                            anchorEl={anchorEl}
                            open={isMenuOpen}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}                        
                        >
                            {Object.values(Priority).map((level) => (
                                <MenuItem
                                    key={level}
                                    onClick={() => handleSetPriority(level)}
                                    selected={currentPriority === level}
                                    sx={{ minWidth: 200}}
                                >
                                    <Chip
                                        label={level.toUpperCase()}
                                        color={priorityColours[level]}
                                        size="medium"
                                        sx={{ pointerEvents: 'none' }}
                                    />
                                </MenuItem>
                            ))}

                        </Menu>
                    
                    <ListItemButton type="text" onClick={() => handleDeleteTodo(todo.id)}>
                        Delete
                    </ListItemButton>
                </ListItem>
                <Divider aria-hidden="true"/>
            </List>
        
    );
};

export default ToDoItem;