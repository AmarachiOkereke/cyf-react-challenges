import React from "react";
import countries from "./countriesAll.json";
import { useState } from "react";
import './App.css';
import RenderCountries from "./RenderCountries";

// const formatNumber = (number) => {
//   return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
// };
// const RenderCountries = (props) => {
//   return props.countries.map((country, i) => {
//     return (
//       <div key={i} className="card-container">
//         <div className="cards">
//           <img src={country.flag} alt="flag" className="card-image" />
//           <div className="card-content">
//             <h3> {country.name}</h3>
//             <p>Population: {formatNumber(country.population)}</p>
//             <p>Region: {country.region}</p>
//             <p>Capital: {country.capital}</p>
//           </div>
//         </div>
//       </div>
//     );
//   });
// };

function filterCountries(inputValue){
  return countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      country.capital?.toLowerCase().includes(inputValue.toLowerCase())
    );
  }
  );
}

function App() {
  const [arrayOfCountries, setArrayOfCountries] = useState(countries);
  return (
    <div className="App">
      <h1>Where in the world?</h1>
      <form className ="nosubmit">
      <input
          type="text"
          placeholder="Search for a country..."
          className="nosubmit"
        onChange={(e) => {
          setArrayOfCountries(filterCountries(e.target.value));
        }}
      ></input>
      </form>
      <div className="App-body">
        <RenderCountries countries={arrayOfCountries} />
      </div>
    </div>
  );
}

export default App;
