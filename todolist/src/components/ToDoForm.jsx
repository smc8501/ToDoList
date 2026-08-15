import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo} from './ToDoSlice';
import { Container, Stack, TextField, Button } from '@mui/material';
import './Components.css';
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
        <Container maxWidth="xs">
            
                <form onSubmit={handleSubmit} className="todo-form">
                    <Stack direction={"row"} spacing={2} xs={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <TextField
                        type="text"
                        id="todo"
                        name="todo"
                        placeholder="Add a new task..."
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                        size="small"
                    />
                    <Button type="submit" variant="contained" size="small">Add</Button>
                    </Stack>
                </form>
        </Container>
    );

};

export default ToDoForm;