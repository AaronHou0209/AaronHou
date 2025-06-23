import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./compent /About";

function App() {
  let myName = "ChengYu Hou";

  function myFunction() {
    alert("Hello World ");
  }
  function add(a, b) {
    alert(a + b);
  }
  const myStyle = { color: "red" };
  return (
    <>
      <h1 style={myStyle}>Hello Vite </h1>
      <h2>
        my name is {myName}, and my age is {12 + 11}
      </h2>
      <button onClick={myFunction}>Click me</button>
      <button
        onClick={() => {
          add(5, 10);
        }}
      >
        Click me ~
      </button>
      <About />
    </>
  );
}

export default App;
