import { Link } from "react-router-dom"
const Header = () => {
  return (
    <nav>
      <main>
        <Link to={"/"}>Home</Link>
        &emsp;
        <Link to={"about"}>About</Link>
        &emsp;
        <Link to={"services"}>Services</Link>
        &emsp;
        <Link to={"contact"}>Contact</Link>
      </main>
      <hr />
    </nav>
  )
}
export default Header
