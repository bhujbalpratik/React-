import { useEffect, useState } from "react";

function App() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  });

  return (
    <>
      <ul>
        {Data.map((item) => (
          <li key={Math.random()}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
