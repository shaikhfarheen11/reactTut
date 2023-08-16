import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
      const { id, amount, size, maxQuantity } = action.item;

      if (size === 'Small' && amount > maxQuantity) {
          return state; // Return the state without making changes if exceeded
      }

      const existingCartItemIndex = state.items.findIndex(
          item => item.id === id && item.size === size
      );

      let updatedItems;
      let updatedTotalAmount = state.totalAmount;
      let updatedTotalItems = state.totalItems;

      if (existingCartItemIndex !== -1) {
          const existingCartItem = state.items[existingCartItemIndex];
          const newAmount = existingCartItem.amount + amount;

          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = {
              ...existingCartItem,
              amount: newAmount
          };
          updatedTotalItems += amount;
          updatedTotalAmount += amount * existingCartItem.price;
      } else {
          const newItem = {
              id,
              size,
              amount,
              price: action.item.price,
              maxQuantity
          };
          updatedItems = state.items.concat(newItem);
          updatedTotalItems += amount;
          updatedTotalAmount += amount * action.item.price;
      }

      return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
          totalItems: updatedTotalItems
      };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item, selectedSize, selectedMaxQuantity) => {
    dispatchCartAction({
      type: 'ADD',
      item: { ...item, size: selectedSize, maxQuantity: selectedMaxQuantity }
    });
  };
  

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

