import './App.css';
import { useReducer } from 'react';
import Child from './Child';
import StudentForm from './StudentForm';
import { UserContext } from './UserContext';
import A from './A'
import { type } from '@testing-library/user-event/dist/type';
function reducer(state,action){
if(action.type==="INC"){
  return {...state,count:state.count+1}
}
if(action.type==="DEC"){
  return {...state,count:state.count-1}
}
if(action.type==='UPDATE_NEW_TODO'){
  return {...state,newtodo:action.payload}
}
if(action.type==='ADD_TODO'){
  return {...state,todolist:[...state.todolist,state.newtodo]}
}

}
function App() {
  var [state,dispatch]=useReducer(reducer,{newtodo:'',count:0, todolist:['get house','pay bills']})
  return (
    <UserContext.Provider value={{name:'praveen gubbala', age:41}}><div className="m-2 p-2 border border-2 border-danger">
    <h1>Count:{state.count}</h1>
    <button onClick={()=>dispatch({type:"INC"})}>Increment</button>
    <button onClick={()=>dispatch({type:"DEC"})}>Decrement</button>
    <br />
    <input type='text' onChange={(e)=>{dispatch({type:'UPDATE_NEW_TODO', payload:e.target.value})}} />
    <button onClick={()=>{dispatch({type:"ADD_TODO"})}}>Add Todo</button>
    <br />
    <ul>
      {
        state.todolist.map((t)=>{
          return<li>{t}</li>
        })
      }
    </ul>
    <h1>India</h1>
      <StudentForm className="border border-2 m-2 p-2"></StudentForm>
    <Child name="Sandeep">Kumar</Child>
    <h1>App Component</h1>
  <A></A>
  </div>
  </UserContext.Provider>
  );
}

export default App;
