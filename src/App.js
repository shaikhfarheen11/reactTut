import React from 'react';
import './App.css';
import Product from './Components/Product/Product';
import { ProductProvider } from './Components/store/ProductContext';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Product />
      </ProductProvider>
    </div>
  );
}

export default App;
