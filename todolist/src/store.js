import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './Components/ToDoSlice';
const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

export default store;