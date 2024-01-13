import React, { useContext } from "react"
import UserContext from "../context/UserContext"
const Profile = () => {
  const { user } = useContext(UserContext)

  if (!user) return <h5>Please Login</h5>
  return <h5>Welcome ,{user.username}</h5>
}
export default Profile
