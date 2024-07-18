import React, { useState } from 'react'
import Gender from './Gender'

function MyForm() {
    var [details,setDetails]=useState({
        fullName:'',
        gender:''
    })
    function updateFullName(e){
        setDetails({...details,fullName:e.target.value})//setter function to update fn(state variable) value, that will render complete component once again, apart from state variable, useeffect
    }
    function handleGender(ev){
        setDetails({...details,gender:ev.target.value})
    }
  return (
    <div className="m-2 p-2 border border-danger">
      FullName: <input type="text" onKeyUp={(e)=>{updateFullName(e)}}/>
      <br />
      Gender: &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="radio" name="gender" value="male" onChange={(e)=>{handleGender(e)}} /> Male&nbsp;&nbsp;
        <input type="radio" name="gender" value="female" onChange={(e)=>{handleGender(e)}} /> Female&nbsp;&nbsp;
        <input type="radio" name="gender" value="others" onChange={(e)=>{handleGender(e)}} /> Others&nbsp;&nbsp;
        <br />
        <b>{JSON.stringify(details)}</b>
    </div>
  )
}

export default MyForm
