import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inc,dec,reset } from './counterSlice'
function Counter() {
const count = useSelector(state=>state.counterRed.count)
var dispatch = useDispatch()
return (
    <div className='border border-2 m-2 p-2'>
        Counter:{count}<br />
        <button onClick={()=>{dispatch(inc())}}>Increment</button>
        <button onClick={()=>{dispatch(dec())}}>Decrement</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
)
}

export default Counter
