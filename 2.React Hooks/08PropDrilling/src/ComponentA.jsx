import ComponentB from "./ComponentB";
function ComponentA({ data }) {
  return (
    <>
      (ComponentA) Name : {data.name}
      <ComponentB data={data} />
    </>
  );
}
export default ComponentA;
