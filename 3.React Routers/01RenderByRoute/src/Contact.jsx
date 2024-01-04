const Contact = () => {
  return (
    <>
      <h1 className="text-5xl text-center mt-8">Contact Page</h1>
      <p className="text-center mt-5 text-2xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
        laudantium ut expedita unde, quae deserunt nobis officia tenetur quam
        voluptate, doloremque ducimus eaque beatae! Cumque enim eligendi
        voluptatem et repudiandae.
      </p>
      <center>
        <form action="#" className="mt-5">
          <input type="text" name="" id="" placeholder="Enter Your Name" />
          <br />
          <br />
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
          />{" "}
          <br />
          <br />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <br />
          <br />
          <input
            type="submit"
            value="Send"
            className="bg-blue-800 text-white"
          />
        </form>
      </center>
    </>
  )
}
export default Contact
