import { useState, createContext, useEffect } from "react";
import {
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
  setProducts: () => null,
  Products: null,
});

export const ProductsProvider = ({ children }) => {
  const [Products, setProducts] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setProducts(()=>categoryMap);
    };

    getCategoriesMap();

  }, []);

  const value = { setProducts, Products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
