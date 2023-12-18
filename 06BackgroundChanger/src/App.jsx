import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  const Btn = ({ colorName }) => {
    return (
      <>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: colorName }}
          onClick={() => {
            setColor(colorName);
          }}>
          {colorName}
        </button>
      </>
    );
  };
  return (
    <>
      <div
        className="w-full h-screen duration-500"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <Btn colorName="red" />
            <Btn colorName="green" />
            <Btn colorName="blue" />
            <Btn colorName="yellow" />
            <Btn colorName="indigo" />
            <Btn colorName="black" />
            <Btn colorName="orange" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
