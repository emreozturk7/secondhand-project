import React, { useContext, useState, createContext, useEffect } from 'react';
import { getAllProducts } from '../services/productService';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(getAllProducts());
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

function useProduct() {
  return useContext(ProductContext);
}

export { ProductProvider, useProduct, ProductContext };