import { createContext, useEffect, useState } from "react";

export const ProdContext = createContext();

export const ProdContextProvider = ({ children }) => {
    const [cardData, setcardData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then((data)=>setcardData(data))
    }, [])
  
    return (
      <ProdContext.Provider value={{ cardData }}>
        {children}
      </ProdContext.Provider>
    );
  };