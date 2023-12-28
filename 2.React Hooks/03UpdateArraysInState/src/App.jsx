import { useState } from "react";

const App = () => {
  const [friends, setFriends] = useState(["Rahul", "Yash", "Divya"]);
  const AddOne = () => {
    setFriends([...friends, "Karan"]);
  };
  const RemoveOne = () => {
    setFriends(friends.filter((f) => f !== "Divya"));
  };
  const UpdateOne = () => {
    setFriends(friends.map((f) => (f === "Rahul" ? "Rahul Chavan" : f)));
  };
  return (
    <>
      <div className="flex justify-center float-none">
        {friends.map((friend) => (
          <ul>
            <li key={Math.random()} className="text-black ml-4">
              <h1 className="text-5xl mt-5">{friend}</h1>
            </li>
          </ul>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={AddOne}
          className="p-3 bg-blue-800 text-white text-3xl hover:bg-blue-500 mt-6"
        >
          Add Friend
        </button>
        <button
          onClick={RemoveOne}
          className="p-3 bg-blue-800 text-white text-3xl hover:bg-blue-500 mt-6 ml-2"
        >
          Remove Friend
        </button>
        <button
          onClick={UpdateOne}
          className="p-3 bg-blue-800 text-white text-3xl hover:bg-blue-500 mt-6 ml-2"
        >
          Update Friend
        </button>
      </div>
    </>
  );
};

export default App;
