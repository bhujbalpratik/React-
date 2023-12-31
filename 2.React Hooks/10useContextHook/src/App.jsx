import { createContext } from "react";
import Component from "./Component";

export const userData = createContext();
export const productData = createContext();

const App = () => {
  const user = {
    name: "Pratik Bhujbal",
    email: "pb@gmail.com",
    location: "India",
  };
  const product = {
    name: "Dell Inspiron 15",
    description: "Windows Operating System",
    price: 250000,
  };
  return (
    <>
      <userData.Provider value={user}>
        <productData.Provider value={product}>
          <Component />
        </productData.Provider>
      </userData.Provider>
    </>
  );
};

export default App;
