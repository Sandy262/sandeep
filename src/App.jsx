import './App.css';
import Child from './Child';
import StudentForm from './StudentForm';
function App() {
  return (
    <div className="m-2 p-2 border border-2">
      <h1>India</h1>
        <StudentForm className="border border-2 m-2 p-2"></StudentForm>
      <Child name="Sandeep">Kumar</Child>
    </div>
  );
}

export default App;
