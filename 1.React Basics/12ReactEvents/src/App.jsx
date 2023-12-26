const Add = (n1, n2) => {
  return alert(n1 + n2);
};

const copyHandler = () => {
  alert("You can't Copy My content");
};

const move = () => {
  alert("On Mouse Move Event");
};

const App = () => {
  return (
    <>
      <button onClick={() => Add(2, 2)}>Addition</button>
      <p onCopy={copyHandler}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        recusandae ipsum vel, dolore aperiam mollitia sit officia culpa aliquid
        in.
      </p>
      <div
        className="container"
        style={{ marginTop: "30px" }}
        onMouseMove={move}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel magni
          iure similique provident sit sequi officia voluptates incidunt vero
          exercitationem. Dolorem doloribus earum pariatur molestias. Maxime
          veniam debitis dolore Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Non, quaerat explicabo perferendis at eius fugit
          modi, nisi, nostrum libero voluptatibus doloremque odio earum
          repellendus obcaecati? Iure autem expedita cumque quasi.
        </p>
      </div>
    </>
  );
};

export default App;
