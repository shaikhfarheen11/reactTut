import React, { useState, useEffect } from 'react';
import classes from './Product.module.css';
import { useCart } from '../store/CartContext';

  
const CartBadge = ({ cartItems, onClose, onPlaceOrder }) => {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-badge-overlay">
      <div className="cart-badge-content">
        <button className="close-button" onClick={onClose}>Close</button>
        <h3>Cart</h3>
        <p style={{ color: 'white' }}>Total Quantity: {totalQuantity}</p>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <p style={{ color: 'white' }}>{item.candyName} - {item.description} - {item.price}</p>
            </li>
          ))}
        </ul>
        <p style={{ color: 'white' }}>Total Amount: {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
        <button className="place-order-button" onClick={onPlaceOrder}>Place Order</button>
        <button className="cancel-button" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};



const Candy = () => {
  const [enteredCandyName, setEnteredCandyName] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredChoosePrice, setEnteredChoosePrice] = useState('');
  const [addedProducts, setAddedProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart(); // Access cartItems from context

  const handleCandyName = (event) => {
    setEnteredCandyName(event.target.value);
  };

  const handleChoosePrice = (event) => {
    setEnteredChoosePrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      candyName: enteredCandyName,
      description: enteredDescription,
      price: parseFloat(enteredChoosePrice),
      quantity: 1,
    };
    setAddedProducts([...addedProducts, newProduct]);
  };

  useEffect(() => {
    // Update description and price based on selected candy name
    if (enteredCandyName === 'Eclairs') {
      setEnteredDescription('Caramel Choco');
      setEnteredChoosePrice('10rs');
    } else if (enteredCandyName === 'Alpenlibe') {
      setEnteredDescription('Strawberry');
      setEnteredChoosePrice('5Rs');
    } else if (enteredCandyName === 'Choclairs') {
      setEnteredDescription('Chocofills');
      setEnteredChoosePrice('20Rs');
    } else if (enteredCandyName === 'Melody') {
      setEnteredDescription('Chocolaty');
      setEnteredChoosePrice('10Rs');
    }
  }, [enteredCandyName]);

  const candyNames = ['Eclairs', 'Alpenlibe', 'Choclairs', 'Melody'];

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleBuy1 = () => {
    const lastProduct = addedProducts[addedProducts.length - 1];
    if (lastProduct) {
      lastProduct.quantity += 1;
      setCartTotal(cartTotal + lastProduct.price);
    }
  };
  
  
  const handleBuy2 = () => {
    const lastProduct = addedProducts[addedProducts.length - 1];
    if (lastProduct) {
      lastProduct.quantity += 2;
      setCartTotal(cartTotal + lastProduct.price * 2);
    }
  };
  
  const handleBuy3 = () => {
    const lastProduct = addedProducts[addedProducts.length - 1];
    if (lastProduct) {
      lastProduct.quantity += 3;
      setCartTotal(cartTotal + lastProduct.price * 3);
    }
  };


  const handlePlaceOrder = () => {
    console.log('Placing order:', addedProducts);
    setAddedProducts([]);
    setCartTotal(0);
    setIsCartOpen(false);
  };

  const totalQuantity = addedProducts.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={classes["seller-admin"]}>
      <form onSubmit={handleSubmit}>

      <div className={classes["product-control"]}>
  <label htmlFor="candyname">Candy Name:</label>
  <select
    id="candyname"
    value={enteredCandyName}
    onChange={handleCandyName}
    className={classes['input-field']}
  >
    <option value="">Select a Candy</option>
    {candyNames.map((candy, index) => (
      <option key={index} value={candy}>
        {candy}
      </option>
    ))}
  </select>
  <label htmlFor="description">Description:</label>
  <input
    type="text"
    id="description"
    value={enteredDescription}
    readOnly
    className={classes['input-field']}
  />
  <label htmlFor="price">Price:</label>
  <input
    type="text"
    id="chooseprice"
    value={enteredChoosePrice}
    onChange={handleChoosePrice}
    className={classes['input-field']}
  />
</div>


<button className={classes["submit-button"]} type="submit">
  Add
</button>

      </form>

      <div className= {classes["added-products"]}>
        
        <ul>
          {addedProducts.map((product, index) => (
            <li key={index}>
              <p className='white-text'>{product.candyName} - {product.description} - {product.price}</p>
            </li>
          ))}
        </ul>
      </div>

      <button className="buy-button" onClick={handleBuy1}>Buy1</button>
      <button className="buy-button" onClick={handleBuy2}>Buy2</button>
      <button className="buy-button" onClick={handleBuy3}>Buy3</button>
    


      <button className={classes["cart-badge"]} onClick={handleCartClick}>
        Cart: {totalQuantity}
      </button>
      {isCartOpen && (
        <CartBadge
          cartItems={addedProducts}
          onClose={handleCartClick}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
    </div>
  );
};

export default Candy;
