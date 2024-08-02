import logo from './logo.svg';
import './App.css';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import Countries from './features/countries/Countries';
import Posts from './features/posts/Posts';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='border border-2 m-2 p-2'>
      <h1>India</h1>
      <Countries></Countries>
      <Outlet></Outlet>
      <Counter></Counter>
      <Todolist></Todolist>
      
    </div>
  );
}

export default App;
