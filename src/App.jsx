import './App.css';
import { useReducer } from 'react';
import Child from './Child';
import StudentForm from './StudentForm';
import { UserContext } from './UserContext';
import A from './A'
import { type } from '@testing-library/user-event/dist/type';
function reducer(state,action){
if(action.type==="INC"){
  return {count:state.count+1}
}
if(action.type==="DEC"){
  return {count:state.count-1}
}
}
function App() {
  var [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <UserContext.Provider value={{name:'praveen gubbala', age:41}}><div className="m-2 p-2 border border-2 border-danger">
    <h1>Count:{state.count}</h1>
    <button onClick={()=>dispatch({type:"INC"})}>Increment</button>
    <button onClick={()=>dispatch({type:"DEC"})}>Decrement</button>
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
