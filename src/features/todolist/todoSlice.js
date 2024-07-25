import { createSlice } from '@reduxjs/toolkit'
const initialState={
    todos:['van','bus','train']
}
export const todoSlice=createSlice({
    name:"Todolist Slice",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        }
    }
})
export const {addTodo}=todoSlice.actions//gives an object, daani nundi add todo kavali
const todoReducer= todoSlice.reducer
export default todoReducer