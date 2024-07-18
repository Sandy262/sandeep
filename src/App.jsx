import logo from './logo.svg';
import './App.css';
import Home from './home';
import Aboutus from './Aboutus';
import { Link, Outlet } from 'react-router-dom';
import MyForm from './MyForm';
import Gender from './Gender';
function App() {
  return (
    <div className="m-2 p-2 border border-info">
      <h1>India</h1>
      {/* <Home></Home> */}
      {/* <Aboutus></Aboutus> */}
      <a href="/home">Home</a>
      <br />
      <Link to="/Aboutus" state={{likes:"chicken"}}>About us</Link>
      <Outlet></Outlet>
      <MyForm></MyForm>
      {
        //<Gender></Gender>
      }
    </div>
  );
}

export default App;
