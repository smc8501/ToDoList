import { createSlice } from '@reduxjs/toolkit';

export const Priority = Object.freeze({
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High",
});

const initialState = {
    todos: [],
    priority: "",
    filter: 'all',
};


const ToDoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
                priority: ""
            });
                
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(item => item.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        setPriority: (state, action) => {
            const { id, newPriority } = action.payload;
            const todo = state.todos.find(item => item.id === id);
            // if todo exists then assign priority
            if (todo) {
                todo.priority = newPriority;
            } 
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id); 
            if (todo) {
                todo.text = text;
            }  
        },
        

}});

export const { addTodo, deleteTodo, toggleTodo, setFilter, updateTodo, setPriority } = ToDoSlice.actions;
export default ToDoSlice.reducer;