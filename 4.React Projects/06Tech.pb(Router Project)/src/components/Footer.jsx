import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai"

import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Tech.PB</h1>
        <p>&copy; All rights reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://instagram.com/bhujbal_pb" target={"blank"}>
            <AiFillInstagram />
            Instagram
          </a>
          <a
            href="https://linkedin.com/in/pratik-bhujbal-334806280"
            target={"blank"}
          >
            <AiFillLinkedin />
            Linkedin
          </a>
          <a href="https://github.com/bhujbalpratik" target={"blank"}>
            <AiFillGithub />
            Github
          </a>
          <a href="https://twitter.com/Bhujbal_Pratik_" target={"blank"}>
            <FaSquareXTwitter /> X
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
