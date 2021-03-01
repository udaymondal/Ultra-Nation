
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
      //const names = data.map(country => country.name);
    })
    .catch(error => console.log(error))
  },[])

  const handleAddCountry=(country)=>{
    console.log("clicked", country);
}
  return (
    <div>
      <h3>Countries Loaded: {countries.length}</h3>
      <h4>Country Added: </h4>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      
    </div>
  );
}

export default App;
