import { useState, createContext } from "react";
import PRODUCTS from "../shop-data.json";
export const ProductsContext = createContext({
  setProducts: () => null,
  Products: null,
});

export const ProductsProvider = ({ children }) => {
  const [Products, setProducts] = useState(PRODUCTS);
  const value = { setProducts, Products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
