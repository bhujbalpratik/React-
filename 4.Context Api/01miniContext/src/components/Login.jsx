import React, { useContext, useState } from "react"
import UserContext from "../context/UserContext"
const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }
  return (
    <>
      <input
        type="text"
        name="username"
        placeholder="UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <br />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
export default Login
