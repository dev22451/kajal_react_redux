import { createSlice } from "@reduxjs/toolkit";

const initialState=[];
const addTodo = createSlice({
    name: "todos",
    initialState,
    reducers: {
      addTodos: (state, action) => {
        state.push(action.payload);
        console.log(state, 'state')
        console.log(action, 'action')
        return state;

      },
      removeTodos: (state, action) => {
        return state.filter((item) => item.id !== action.payload);
      },
    },
  });
 export const { addTodos , removeTodos} = addTodo.actions;
 export const reducer= addTodo.reducer;

