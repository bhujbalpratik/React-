import React from "react"
import { useParams } from "react-router-dom"

const User = () => {
  const { userId } = useParams()
  return (
    <div className="text-3xl text-white bg-slate-950 p-5 text-center">
      User : {userId}
    </div>
  )
}
export default User
