import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './counter';
import TodoList from './TodoList';
{
  //edaina oka folder lopala ade name tho oka file unte easygaa access cheyyochu, adi default ga index page lone vethukkuntundi
}

function App() {
  return (
    <Provider store={store}>
      <div className="border border-2 m-2 p-2">
      <h1>India</h1>
      <Counter></Counter>
      <TodoList></TodoList>
    </div>
    </Provider>
  );
}

export default App;
