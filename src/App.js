
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
      const names = data.map(country => country.name);
    })
    .catch(error => console.log(error))
  },[])
  return (
    <div>
      <h3>Countries Loaded: {countries.length}</h3>
      
        {
          countries.map(country => <Country name={country.name}></Country>)
        }
      
    </div>
  );
}

export default App;
