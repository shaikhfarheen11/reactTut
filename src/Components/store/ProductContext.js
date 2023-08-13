import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [sizeQuantities, setSizeQuantities] = useState({
    S: 0,
    M: 0,
    L: 0,
  });

  const [cartBadgeCount, setCartBadgeCount] = useState(0);
  const [addedProducts, setAddedProducts] = useState([]);

  const handleSizeQuantityChange = (size, quantity) => {
    setSizeQuantities((prevQuantities) => ({
      ...prevQuantities,
      [size]: quantity,
    }));
  };

  const addProduct = (product) => {
    setAddedProducts((prevProducts) => [...prevProducts, product]);
    setCartBadgeCount(cartBadgeCount + 1);
  };

  return (
    <ProductContext.Provider
      value={{
        sizeQuantities,
        handleSizeQuantityChange,
        addProduct,
        cartBadgeCount,
        addedProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
