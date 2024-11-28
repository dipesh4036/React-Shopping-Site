import React, { createContext, useContext, useState ,useEffect} from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
   const [products,setproducts] =  useState([])
  const getproducts = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const result = await data.json()
      setproducts(result)
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
  useEffect(() => {
    getproducts();
  }, []);
  return (
    <UserContext.Provider value={{ products, setproducts }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
