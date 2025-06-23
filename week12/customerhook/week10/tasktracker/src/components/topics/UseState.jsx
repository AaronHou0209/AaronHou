// Hooks are used to maintain state in function components!

// First hook we are discussing here is "useState" hook

import { useState } from "react";

const UseState = () => {
  const [x, setX] = useState(0);
  const [name, setName] = useState("John");
  const [person, setPerson] = useState({
    id: 1,
    name: "Alan Smith",
    age: 20,
    isYoung: true,
  });

  let num = [1, 2, 3, 4];

  const [numbers, setNumbers] = useState(num);

  let changeObj = () => {
    setPerson((previousState) => {
      return { ...previousState, age: 40 };
    });
  };

  let changeArray = () => {
    setNumbers((previousState) => {
      return [...previousState, Math.floor(Math.random() * 50)];
    });
  };

  return (
    <div>
      <h1>Use State - {name}</h1>
      {/* <h2>Count:{x}</h2>
      <button
        className="btn"
        onClick={() => {
          document.title = x;
          setX(x + 1);
          setName("Alan Smith");
        }}
      >
        Update
      </button>
      <h3>Person Details</h3>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>

      <h4>{person.isYoung.toString()}</h4>

      <button className="btn" onClick={changeObj}>
        Update
      </button> */}

      <ul>
        {numbers.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      <button className="btn" onClick={changeArray}>
        Add
      </button>
    </div>
  );
};

export default UseState;
