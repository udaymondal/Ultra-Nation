
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
  const [countries, setCountries] = useState([]);

  const [cart, setCart] = useState([]);

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
    // console.log("clicked", country);
    const newCart = [...cart, country];
    setCart(newCart);

}
  return (
    <div>
      <h3>Countries Loaded: {countries.length}</h3>
      <h4>Country Added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
      
    </div>
  );
}

export default App;
