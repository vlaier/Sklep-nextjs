import React, { useState, useContext, ReactNode } from "react";
export interface CartItem {
  id: string;
  title: string;
  price: number;
  count: number;
}
interface CartState {
  items: CartItem[];
  addItemToCart: (item: CartItem) => void;
}

export const CartStateContext = React.createContext<CartState | null>(null);
export const CartStateContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  return (
    <CartStateContext.Provider
      value={{
        items: cartItems,
        addItemToCart: (item) =>
          setCartItems((prevCartItems) => {
            const existingItem = prevCartItems.find(
              (existingItem) => existingItem.id === item.id
            );
            if (!existingItem) {
              return [...prevCartItems, item];
            }
            const newCartItems = prevCartItems.map((cartItem) => {
              if (cartItem.id === existingItem.id) {
                return { ...cartItem, count: cartItem.count + 1 };
              }
              return cartItem;
            });
            return newCartItems;
          }),
      }}
    >
      {children}
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const cartState = useContext(CartStateContext);
  if (!cartState) {
    throw new Error("You forogot to add CartStateContextProvider");
  }
  return cartState;
};
