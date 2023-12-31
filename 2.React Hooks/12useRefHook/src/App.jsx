import { useRef } from "react";

const App = () => {
  const inputElement = useRef(null);
  const Action = () => {
    inputElement.current.focus();
    inputElement.current.value = "WebDev_pb";
  };
  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={Action}>Focus and Write WebDev_pb</button>
    </>
  );
};

export default App;
