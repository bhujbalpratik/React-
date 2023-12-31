import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("Enter Your Name");

  const addData = (e) => {
    setUserName(e.target.value);
  };
  const HandleData = (e) => {
    e.preventDefault();
    alert(`You typed : ${userName}`);
    setUserName("");
  };

  return (
    <>
      <h1>React Form</h1>
      <form onSubmit={HandleData}>
        <input type="text" value={userName} onChange={addData} />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default App;
