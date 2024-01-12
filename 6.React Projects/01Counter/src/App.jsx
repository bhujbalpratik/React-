import { useState } from "react"
import "./App.css"

function App() {
  let [counter, setCounter] = useState(15)

  const IncValue = () => {
    if (counter < 20) setCounter(++counter)
    else alert("You reached your limit")
  }
  const DecValue = () => {
    if (counter > 0) setCounter(--counter)
    else alert("You cant decrese than 0")
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={IncValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={DecValue}>Decrease Value</button>
      <h2>Another Counter : {counter}</h2>
    </>
  )
}

export default App
