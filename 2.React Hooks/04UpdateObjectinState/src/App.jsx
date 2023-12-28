import { useState } from "react";

function App() {
  const [movie, setMovie] = useState({ title: "Avengers Endgame", Ratings: 4 });

  const updateRating = () => {
    setMovie({ ...movie, Ratings: Number.parseInt(Math.random() * 5) });
  };
  return (
    <>
      <h1>Movie Name : {movie.title}</h1>
      <h2>Movie Ratings : {movie.Ratings}</h2>
      <button onClick={updateRating}>Update Ratings</button>
    </>
  );
}

export default App;
