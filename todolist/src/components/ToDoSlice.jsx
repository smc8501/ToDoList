import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    todos: [],
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
                completed: false
            });
                
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
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
        clearTodos: (state) => {
            state.todos = [];
        },

}});

export const { addTodo, deleteTodo, toggleTodo, setFilter, updateTodo, clearTodos } = ToDoSlice.actions;
export default ToDoSlice.reducer;