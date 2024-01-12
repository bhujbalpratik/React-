import React from "react"
import vg from "../assets/2.webp"
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Tech.PB</h1>
          <p>Solutions to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolorem, suscipit esse reprehenderit sapiente maiores est expedita
            molestiae error corrupti praesentium ad, ab veniam incidunt,
            voluptatum natus. Exercitationem rerum fuga neque sunt consequatur
            molestias ex numquam asperiores odit eum soluta labore corporis,
            eveniet architecto sit, blanditiis illum veniam. Totam assumenda
            odio minima id, deserunt cumque eius rem natus laborum itaque
            accusamus dicta rerum, blanditiis repellendus qui dolor ipsum.
            Eligendi maiores suscipit animi impedit! Est perspiciatis quidem quo
            provident. Suscipit adipisci debitis odit, fugit corrupti? Lorem
            ipsum dolor sit amet
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillGithub />
              <p>Github</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
export default Home
