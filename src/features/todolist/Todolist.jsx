import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from './todoSlice';
function Todolist() {
    const todos = useSelector(state=>state.todoRed.todos)
    const [newtodo,setNewTodo] = useState('')
    const dispatch = useDispatch();
return (
    <div className='border border-2 m-2 p-2'>
        <h1>Todolist</h1>
        <input type='text' onChange={(e)=>{setNewTodo(e.target.value)}}/>
        <button onClick={()=>dispatch(addTodo(newtodo))}>Add Todo</button>
    <ul>
        {todos.map((t)=>{
            return <li>{t}</li>
            })}
    </ul>
    </div>
)
}

export default Todolist
