import React from "react";
import { useCartState } from "../../components/Cart/CartContext";
const Cart = () => {
  const cartState = useCartState();
  return (
    <div>
      <ul>
        {cartState.items.map((item, index) => {
          return (
            <li key={item.id}>
              {item.title} - {item.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Cart;
