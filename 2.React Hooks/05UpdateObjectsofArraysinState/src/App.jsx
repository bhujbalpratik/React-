import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spiderman", ratings: 4 },
    { id: 2, title: "Ironman", ratings: 4 },
    { id: 3, title: "Avengers", ratings: 5 },
  ]);

  const changeMovie = () => {
    setMovies(
      movies.map((m) => (m.id === 2 ? { ...movies, title: "Superman" } : m))
    );
  };
  return (
    <>
      {movies.map((movie) => (
        <li key={Math.random()}>{movie.title}</li>
      ))}
      <button onClick={changeMovie}>Change Movie</button>
    </>
  );
}

export default App;
