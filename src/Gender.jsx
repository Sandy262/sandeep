import React from 'react'

function Gender() {
    var[gen,setGen]=React.useState('')
    function handleGender(ev){
        setGen(ev.target.value)
    }
return (
    <div className='border border-success border-2 p-2 m-2'>
        <h3>Gender</h3>
        <input type="radio" name="gender" value="male" onChange={(e)=>{handleGender(e)}} /> Male&nbsp;&nbsp;
        <input type="radio" name="gender" value="female" onChange={(e)=>{handleGender(e)}} /> Female&nbsp;&nbsp;
        <input type="radio" name="gender" value="others" onChange={(e)=>{handleGender(e)}} /> Others&nbsp;&nbsp;
        <h4>Selected Gender:{gen}</h4>
    </div>
)
}

export default Gender
