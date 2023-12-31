import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  // 1.Render for the (first Time)
  // 2.Anytime we do (Side Effect)
  // 3.Dependancy List
  useEffect(() => {
    if (value > 0) {
      document.title = `Value:${value}`;
      console.log(value);
    }
  }, [value]);
  return (
    <>
      <center>
        <h1>{value}</h1>
        <button onClick={() => setValue(value + 1)}>Click</button>
      </center>
    </>
  );
}

export default App;
