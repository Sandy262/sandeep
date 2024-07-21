import './App.css';
import Child from './Child';
import StudentForm from './StudentForm';
import { UserContext } from './UserContext';
import A from './A'
function App() {
  return (
    <UserContext.Provider value={{name:'praveen gubbala', age:41}}><div className="m-2 p-2 border border-2 border-danger">
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
