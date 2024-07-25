import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0
}
export const counterSlice=createSlice({
    name:"CounterSlice",
    initialState,
    reducers:{
        inc:(state,action)=>{
            state.count=state.count+1
        },
        dec:(state,action)=>{
            state.count--
        },
        reset:(state,action)=>{
            state.count=0
        }
    }
})
export const {inc,dec,reset}=counterSlice.actions
const counterReducer=counterSlice.reducer
export default counterReducer
//export default counterSlice.reducer