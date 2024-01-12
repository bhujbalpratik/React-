import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Home from "./components/Home"
import Tutorials from "./components/Tutorials"
import Notes from "./components/Notes"
import Doubt from "./components/Doubt"
import Login from "./components/Login"
import Signup from "./Signup"
import Layout from "./Layout"

const Router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="tutorials" element={<Tutorials />} />
      <Route path="notes" element={<Notes />} />
      <Route path="doubt" element={<Doubt />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>,
  ])
)
const App = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}
export default App
