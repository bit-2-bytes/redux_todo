import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todo/todoSlice.js'
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});