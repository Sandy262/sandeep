import React, { useContext } from 'react'
import { UserContext } from './UserContext'
import B from './B'
function A() {
    var x=useContext(UserContext)
    console.log(x)
return (
    <div className='border border-2 border-danger m-2 p-2'>
        <h3>A Component</h3>
        <B></B>
    </div>
)
}

export default A
