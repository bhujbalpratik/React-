import ComponentA from "./ComponentA";

function App() {
  const Data = {
    name: "Pratik Bhujbal",
    email: "pb@gmail.com",
    location: "Chatrapati Sambhajinagar",
  };
  return (
    <>
      <ComponentA data={Data} />
    </>
  );
}

export default App;
