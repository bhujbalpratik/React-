import ComponentC from "./ComponentC";

function ComponentB({ data }) {
  return (
    <div>
      (ComponentB) Email:{data.email}
      <ComponentC data={data} />
    </div>
  );
}
export default ComponentB;
