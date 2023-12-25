const userInfo = [
  { name: "Pratik", gmail: "pb@gmail.com", location: "Ch.Sambhajinagar" },
  { name: "Rahul", gmail: "rc@gmail.com", location: "Beed" },
  { name: "Karan", gmail: "kn@gmail.com", location: "Ahmednagar" },
];
function App() {
  return (
    <>
      {userInfo.map((user) => (
        <ul key={Math.random() * 10}>
          <li>{user.name}</li>
          <li>{user.gmail}</li>
          <li>{user.location}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
