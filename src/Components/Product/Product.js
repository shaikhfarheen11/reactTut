import React, { useState, useEffect } from 'react';
import classes from './Product.module.css';



const CartBadge = ({ cartItems, onClose, onPlaceOrder }) => (
  <div className={classes['cart-badge-overlay']}>
    <div className={classes['cart-badge-content']}>
      <button className={classes['close-button']} onClick={onClose}>Close</button>
      <h3 className={classes['white-text']}>My Cart</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <p className={classes['white-text']}>{item.medicineName} - {item.description} - {item.price} - {item.quantity}</p>
          </li>
        ))}
      </ul>
      <p className={classes['white-text']}>Total Amount: {cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</p>
      <button className={classes['place-order-button']} onClick={onPlaceOrder}>Place Order</button>
      <button className={classes['cancel-button']} onClick={onClose}>Cancel</button>
    </div>
  </div>
);
const WaiterLife = () => {
  const [enteredMedicineName, setEnteredMedicineName] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredChoosePrice, setEnteredChoosePrice] = useState('');
  const [enteredQuantity, setEnteredQuantity] = useState('');
  const [maxQuantity, setMaxQuantity] = useState(0);
  const [addedProducts, setAddedProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);


  const handleMedicineName = (event) => {
    setEnteredMedicineName(event.target.value);
  };

  const handleChoosePrice = (event) => {
    setEnteredChoosePrice(event.target.value);
  };

  const handleQuantity = (event) => {
    const newQuantity = parseInt(event.target.value);
    setEnteredQuantity(newQuantity);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      medicineName: enteredMedicineName,
      description: enteredDescription,
      price: enteredChoosePrice,
      quantity: enteredQuantity,
    };
    setAddedProducts([...addedProducts, newProduct]);

    // Clear input fields after adding the product
  //   setEnteredMedicineName('');
  //   setEnteredDescription('');
  //   setEnteredChoosePrice('');
  //   setEnteredQuantity('');
  };

  useEffect(() => {
    // Update description, price, and max quantity based on selected medicine name
    if (enteredMedicineName === 'Paracetamol') {
      setEnteredDescription('Reduce body temperature');
      setEnteredChoosePrice('100');
      setMaxQuantity(1000);
    } else if (enteredMedicineName === 'Tylenol') {
      setEnteredDescription('Relieve headaches');
      setEnteredChoosePrice('50');
      setMaxQuantity(50);
    } else if (enteredMedicineName === 'Motrin') {
      setEnteredDescription('Provide pain relief');
      setEnteredChoosePrice('20');
      setMaxQuantity(200);
    } else if (enteredMedicineName === 'Advil') {
      setEnteredDescription('Fever relief');
      setEnteredChoosePrice('300');
      setMaxQuantity(300);
    }
    setEnteredQuantity('');
  }, [enteredMedicineName]);

  const medicineNames = ['Paracetamol', 'Tylenol', 'Motrin', 'Advil'];

  const handleAddToBill = () => {
    // Perform any additional actions before adding to the bill
    // For example, sending the data to a backend or processing it
    console.log('Adding to bill:', addedProducts);
    setCartTotal(addedProducts.reduce((total, product) => total + product.quantity, 0));
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handlePlaceOrder = () => {
    // Implement your logic to place the order
    console.log('Placing order:', addedProducts);
    // Clear the cart or perform any necessary actions
    setAddedProducts([]);
    setCartTotal(0);
    setIsCartOpen(false);
  };

  return (
    <div className="seller-admin">
      <form onSubmit={handleSubmit}>
        {/* ... (input fields) */}
        <div className="product-control">
          <label htmlFor="medicinename">Medicine Name:</label>
          <select
            id="medicinename"
            value={enteredMedicineName}
            onChange={handleMedicineName}
          >
            <option value="">Select a medicine</option>
            {medicineNames.map((medicine, index) => (
              <option key={index} value={medicine}>
                {medicine}
              </option>
            ))}
          </select>
        </div>
        <div className="product-control">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={enteredDescription}
            readOnly
          />
        </div>
        <div className="product-control">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="chooseprice"
            value={enteredChoosePrice}
            onChange={handleChoosePrice}
          />
        </div>
        <div className="product-control">
          <label htmlFor="qunatityavailable">Quantity Available:</label>
          <input
            type="number"
            id="expensequnatity"
            value={enteredQuantity}
            onChange={handleQuantity}
            max={maxQuantity}
          />
        </div>
        <button className="submit-button" type="submit">
          Add Product
        </button>
      </form>

      <div className="added-products">
        <h2>Added Products:</h2>
        <ul>
          {addedProducts.map((product, index) => (
            <li key={index}>
              <p className='white-text'>{product.medicineName} - {product.description} - {product.price} - {product.quantity}</p>
            </li>
          ))}
        </ul>
      </div>
      <button className="add-to-bill-button" onClick={handleAddToBill}>
        Add to bill
      </button>
      <button className="cart-badge" onClick={handleCartClick}>
          My Cart: {cartTotal}
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

export default WaiterLife;
