import { useEffect, useState } from "react";
const Ueffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect is called");
  }, []); //只叫出並儲存一次
  return (
    <div>
      T<h3>The value of count is {count}</h3>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
    </div>
  );
};
export default Ueffect;
