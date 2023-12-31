import { createContext } from "react";
import ComponentC from "./ComponentC";
export const userData = createContext();
export const productData = createContext();

const App = () => {
  const user = { name: "Pratik", email: "pb@gmail.com", location: "India" };
  const product = {
    name: "MacBook",
    description: "Mac Operating System",
    price: 250000,
  };
  return (
    <>
      <userData.Provider value={user}>
        <productData.Provider value={product}>
          <ComponentC />
        </productData.Provider>
      </userData.Provider>
    </>
  );
};
export default App;
