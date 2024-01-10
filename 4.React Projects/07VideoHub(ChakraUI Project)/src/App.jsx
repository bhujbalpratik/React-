import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Tutorials from "./components/Tutorials"
import Notes from "./components/Notes"
import Doubt from "./components/Doubt"
import Login from "./components/Login"
import Signup from "./Signup"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/doubt" element={<Doubt />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
