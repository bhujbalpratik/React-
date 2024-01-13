import React from "react"
import UserContext from "../context/UserContext"

const Login = () => {
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const { setUser } = React.useContext(UserContext)
  const handleLogin = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }

  return (
    <>
      <input
        type="text"
        name="username"
        id=""
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Your User Name"
      />{" "}
      <input
        type="password"
        name="username"
        id=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
      />
      <button onClick={handleLogin}>Login</button>
    </>
  )
}
export default Login
