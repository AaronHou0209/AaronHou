import Header from "./compent/Header";
import WithA from "./compent/WithA";
import WithI from "./compent/WithI";
import Showlist from "./compent/Showlist";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState([]);
  const [showList, setShowList] = useState(false); // control showlist show or not
  // accss get info
  useEffect(() => {
    const fetchtake = async () => {
      const read = await fetch("https://restcountries.com/v3.1/all");
      const get = await read.json();
      setCountry(get);
    };
    fetchtake();
  }, []);

  // get only begin with a
  const startA = async () => {
    const read = await fetch("https://restcountries.com/v3.1/all");
    const get = await read.json();
    const data = get
      .filter((country) => country.name.official.startsWith("A"))
      .map((country) => ({
        official: country.name.official,
        capital: country.capital ? country.capital[0] : "N/A", // maybe has undefined
        img: country.flags ? country.flags.png : "",
        border: country.borders ? country.borders.join(", ") : "No Borders",
      }));

    setCountry(data);
    setShowList(true);
  };
  // get only begin with a
  const startI = async () => {
    const read = await fetch("https://restcountries.com/v3.1/all");
    const get = await read.json();
    const data = get
      .filter((country) => country.name.official.startsWith("I"))
      .map((country) => ({
        official: country.name.official,
        capital: country.capital ? country.capital[0] : "N/A", // maybe has undefined
        img: country.flags ? country.flags.png : "",
        border: country.borders ? country.borders.join(", ") : "No Borders",
      }));
    setCountry(data);
    setShowList(true);
  };

  return (
    <div>
      <Header title="Neighboring Countries" />
      <div className="btnspace">
        <WithA showCountry={startA} Data={country} />
        <WithI showCountry={startI} Data={country} />
      </div>
      {/* show or not shoe  */}
      {showList && <Showlist addlist={country} className="list" />}
    </div>
  );
}

export default App;
