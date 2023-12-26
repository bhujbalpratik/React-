import { useState } from "react";

const App = () => {
  const [userName, setuserName] = useState("Unknown");
  const changeName = () => {
    const UserNames = ["WebDev_pb", "Pratik", "Bhujbal_pb", "webdev_pratik"];
    const names = Number.parseInt(Math.random() * 3);

    setuserName(UserNames[names]);
  };

  return (
    <>
      <h1 className="text-red-500 text-center text-5xl mt-32">{userName}</h1>
      <div className="flex justify-center mt-5">
        <button
          className="text-white bg-blue-950 hover:bg-blue-700 m-auto p-5 text-center rounded-full "
          onClick={changeName}
        >
          Change Name
        </button>
      </div>
    </>
  );
};

export default App;
