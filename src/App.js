// import React, { useState } from "react";
// import Header from "./Components/Layouts/Header";
// import Meals from "./Components/Meals/Meals";
// import Cart from "./Components/Cart/Cart";
// import CartProvider from "./Components/store/CartProvider";

// function App() {
//   const [cartIsShown, setCartIsShown] = useState(false);

//   const showCartHandler = () => {
//     setCartIsShown(true);
//   };

//   const hideCartHandler = () => {
//     setCartIsShown(false);
//   };

//   return (
//     <CartProvider>
//       {cartIsShown && <Cart onClose={hideCartHandler} />}
//       <Header onShowCart={showCartHandler} />
//       <main>
//         <Meals />
//       </main>
//     </CartProvider>
//   );
// }

// export default App;
import React from 'react';
import classes from './App.css';
import Products from './Components/Products/Products';


function App() {
  return (
    <div>
      <Products /> 
      <main className={classes.main}>
        {/* Display the Products component */}
      </main>
    </div>
  );
}

export default App;

