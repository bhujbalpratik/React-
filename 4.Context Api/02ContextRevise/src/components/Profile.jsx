import React from "react"
import UserContext from "../context/UserContext"

const Profile = () => {
  const { user } = React.useContext(UserContext)

  if (!user) return <h3>Please Login</h3>
  return <h3>Welcome , {user.username}</h3>
}
export default Profile
