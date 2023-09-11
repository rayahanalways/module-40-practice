import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]); // useEffect hook use kore outside data load kora hoy
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    setVisitedCountries([...visitedCountries, country]);
    console.log(country);
  };

  const handleVisitedFlags = (flag) => {
    setVisitedFlags([...visitedFlags, flag]);
  };
  return (
    <div>
      <h3>Countries: {countries.length} </h3>
      <h4>visited countries: {visitedCountries.length} </h4>

      <div className="flag-container">
        {
          visitedFlags.map((flag) => (
            <img key={flag.cca3} src={flag}></img>
          ))
        }
      </div>
     
     
      <div>
         <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country}</li>
          ))}
        </ul>
      </div>
    
      <div className="country-container">
        {countries.map((country) => (
          <Country
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            key={country.cca3}
            country={country}
          ></Country>
        ))}
        ;
      </div>
    </div>
  );
};

export default Countries;
