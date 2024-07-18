import React from 'react'

function MyForm() {
    var [fn,setFn]=React.useState('')
    function updateFirstName(e){
        setFn(e.target.value)//setter function to update fn(state variable) value, that will render complete component once again, apart from state variable, useeffect
    }
  return (
    <div className="m-2 p-2 border border-danger">
      <input type="text" onKeyUp={(e)=>{updateFirstName(e)}}/>
      <h1>Entered text:{fn}</h1>
    </div>
  )
}

export default MyForm
