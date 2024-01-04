import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Layout from "./Layout.jsx"
import Contact from "./components/Contact/Contact"
import Github, { GithubInfoLoader } from "./components/Github/Github"
import User from "./components/User/User"

// CreateBrowserRouter Method
// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//     ],
//   },
// ])

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userId" element={<User />} />
      <Route loader={GithubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
)
