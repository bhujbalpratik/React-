const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>InValid Password</h1>;

const Password = ({ IsValid }) => {
  if (IsValid) {
    return <ValidPassword />;
  } else {
    return <InvalidPassword />;
  }
};

function App() {
  return (
    <>
      <Password IsValid={true} />
    </>
  );
}

export default App;
