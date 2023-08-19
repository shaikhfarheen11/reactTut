import React from 'react';
import { CartProvider } from './Components/store/CartContext';
import Product from './Components/Product/Product'; // Update the path

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Product />
      </div>
    </CartProvider>
  );
}

export default App;
