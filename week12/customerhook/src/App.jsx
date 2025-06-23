import { useState } from "react";
import useDocTitle from "./hooks/useDocTitle";
import useSmoothScroll from "./hooks/useSmoothScroll";
import "./App.css";

function App() {
  const [docTitle, setDocTitle] = useDocTitle("sometitle"); // Pass string directly
  const [refToScrolltop, setSmoothScrolltop] = useSmoothScroll();
  const [refToScrollbutton, setSmoothScrollbutton] = useSmoothScroll();
  return (
    <>
      <h1>Custom Hooks</h1>

      <button
        ref={refToScrolltop}
        onClick={() => setDocTitle("Hello, I'm a new Title")}
      >
        Change Title
      </button>
      <button onClick={setSmoothScrollbutton}>Scroll</button>
      <div style={{ marginTop: "150vh" }} ref={refToScrollbutton}>
        {" "}
        I am the div to scroll to{" "}
      </div>

      <button onClick={setSmoothScrolltop}> Scroll</button>
    </>
  );
}

export default App;
