import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name:'todo',
    initialState:{data:  []},
    reducers: {
       addTodo(state,action){
           state.data.push(action.payload)
       }
    }
})

export const { addTodo } = counterSlice.actions
export default counterSlice.reducer