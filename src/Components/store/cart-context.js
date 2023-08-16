import { createContext } from "react";

const CartContext = createContext({
    items: [],
    totalElement: 0,
    addItem: (item) => {},
    removeItem: (id) => {},

});
export default CartContext;