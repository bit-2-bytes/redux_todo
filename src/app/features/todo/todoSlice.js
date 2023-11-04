import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuidv4(),
        text: action.payload,
      };
      state.push(todo);
    },
    updateTodo: (state, action) => {
      const editObject = state.find((todo) => todo.id === action.payload.id);
      editObject.text = action.payload.text;
    },
    deleteTodo: (state, action) => {
      return (state = state.filter((todo) => todo.id !== action.payload));
    },
  },
});

// this is for dispatch
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;
