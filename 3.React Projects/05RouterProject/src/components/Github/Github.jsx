// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

const Github = () => {
  //   const [data, setData] = useState([])
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/bhujbalpratik")
  //       .then((res) => res.json())
  //       .then((data) => setData(data))
  //   }, [])
  const data = useLoaderData()
  return (
    <div className="p-5 bg-slate-600">
      <h1 className="text-center text-3xl text-white">Github</h1>
      <img
        src={data.avatar_url}
        alt="Github Profile"
        className="m-auto rounded-md w-[20rem]"
      />
      <h3 className="text-center text-2xl text-white">
        UserName: {data.login}
      </h3>
      <h3 className="text-center text-xl text-white">About: {data.bio}</h3>
      <h3 className="text-center text-xl text-white">
        Followers: {data.followers}
      </h3>
    </div>
  )
}
export default Github

export const GithubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/bhujbalpratik")
  return res.json()
}
