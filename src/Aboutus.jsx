import React from 'react'
import { useLocation } from 'react-router-dom'

function Aboutus() {
  var c=useLocation();
  console.log(c)
  return (
    <div>
      <h1 className="m-2 p-2 border border-danger">We are Edupoly for better training</h1>
      <h3>{c.state.likes}</h3>
    </div>
  )
}
export default Aboutus