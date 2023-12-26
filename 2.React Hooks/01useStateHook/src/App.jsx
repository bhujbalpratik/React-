import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count >= 20) {
      alert("You can't increment than 20");
    } else {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count <= 0) {
      alert("You can't decrement than 0");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1 className="text-center text-5xl text-red-500 mt-52">{count}</h1>
      <center>
        <button
          className="rounded-md bg-slate-700 p-3 text-white mt-5 hover:bg-slate-500"
          onClick={increment}
        >
          + Increment
        </button>
        <button
          className="rounded-md bg-slate-700 p-3 text-white ml-5 mt-5 hover:bg-slate-500"
          onClick={decrement}
        >
          - Decrement
        </button>
      </center>
    </>
  );
}

export default App;
