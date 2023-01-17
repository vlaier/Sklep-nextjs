import React from "react";
import { useCartState } from "../../components/Cart/CartContext";
import { CartItemElement } from "../../components/Cart/CartItem";
const Cart = () => {
  const cartState = useCartState();
  return (
    <div className="border-2 border-red-500 grid grid-cols-2">
      <ul className="border-2 border-green-500 w-fit">
        {cartState.items.map((item, index) => {
          return <CartItemElement itemData={item} key={item.id} />;
        })}
      </ul>
      <div>Podsumowanie koszyka</div>
    </div>
  );
};
export default Cart;
