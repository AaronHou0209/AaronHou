import { useState } from "react";

const Showlist = ({ addlist }) => {
  return (
    <div className="country">
      {addlist.map((country, index) => (
        <div key={index} className="box">
          <h2>Official Country: {country.official} </h2>
          <h2>Capital: {country.capital}</h2>
          <img src={country.img} alt={country.official} />
          <h4>Neighboring Countries: {country.border}</h4>
        </div>
      ))}
    </div>
  );
};
export default Showlist;
