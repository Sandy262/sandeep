import React from 'react'
import { connect } from 'react-redux'

function TodoList(props) {
return (
    <div className='border border-2 m-2 p-2'>
    <h1>TodoList</h1>
    <input type='text' id='d1'/>
    <button onClick={()=>{props.dispatch({type:'ADD_TODO',payload:document.getElementById('d1').value})}}>Add Todo</button>
    <ul>
        {
            props.todoListR.todos.map((t)=>{
                return <li>{t}</li>
            })
        }
    </ul>
    </div>
)
}

export default connect(store=>store)(TodoList)
