import React from "react";
const formatNumber = (number) => {
  return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
const RenderCountries = (props) => {
  return props.countries.map((country, i) => {
    console.log(country.flag);
    return (
      <div key={i} className="card-container">
        <div className="cards">
          <img src={country.flag} alt="flag" className="card-image" />
          <div className="card-content">
            <h3> {country.name}</h3>
            <p>Population: {formatNumber(country.population)}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      </div>
    );
  });
};
export default RenderCountries;