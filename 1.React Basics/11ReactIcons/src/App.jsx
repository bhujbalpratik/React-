import { GrInstagram } from "react-icons/gr";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const App = () => {
  return (
    <>
      <div className="flex justify-center mt-24">
        <div className="flex-row justify-center">
          <GrInstagram className="text-5xl float-left ml-2" />
          <FaLinkedin className="text-5xl float-left ml-2" />
          <FaFacebook className="text-5xl float-left ml-2" />
          <FaXTwitter className="text-5xl float-left ml-2" />
        </div>
      </div>
    </>
  );
};

export default App;
