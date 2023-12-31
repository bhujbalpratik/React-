import { useContext } from "react";
import { userData, productData } from "./App";

const Component = () => {
  const user = useContext(userData);
  const product = useContext(productData);
  return (
    <>
      <h1>Customer Name:{user.name}</h1>
      <h1>Customer Email:{user.email}</h1>
      <h1>Customer Location:{user.location}</h1>
      <br />
      <br />
      <h2>Product Name : {product.name}</h2>
      <h2>Product Description : {product.description}</h2>
      <h2>Product Price : {product.price}</h2>
    </>
  );
};
export default Component;
