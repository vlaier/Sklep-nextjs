import React from "react";
import { CartItem } from "./CartContext";
export const CartItemElement = ({ itemData }: { itemData: CartItem }) => {
  return (
    <li className="py-6 ">
      {itemData.count} x {itemData.title} - {itemData.price}
    </li>
  );
};
