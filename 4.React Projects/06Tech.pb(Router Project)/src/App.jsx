import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Footer.scss"
import "./styles/Contact.scss"
import "./styles/mediaQuery.scss"
import Layout from "./Layout"
import Home from "./components/Home"
import Services from "./components/Services"
import Contact from "./components/Contact"

const Router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
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
