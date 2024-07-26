import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  var [countries, setCountries]=useState([])
  //usestate lo pettukovadam valla state variable update ayyaka component malli re-render avuthundi
  useEffect(()=>{
axios.get("https://restcountries.com/v3/all").then(function(res){console.log(res)
  setCountries([...res.data])
})
  },[])//page motham load ayyae time ki idi use Effect with empty dependency array call avthundi, adii okkasare load avuthundi, anduke ikkada raasthaamu
  //useeffect kakunda direct ga rasthe, continuous re-rendering due to state update occurs, then whole component gets re-rendered, in that process, state again gets updated, this cycle repeats
  return (
    <div className="App">
      <h1>India</h1>
      <ul>
        {
          countries?.map((c)=>{
            return <li>{c.name.common}</li>
          })
        }
        {
          //state variable countries update ayyaka ee component malli render avuthundi
        }
      </ul>
    </div>
  );
}

export default App;
