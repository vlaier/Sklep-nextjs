import React, { useState, useContext, ReactNode } from "react";
interface CartItem {
  id: string;
  title: string;
  price: number;
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
          setCartItems((cartItems) => [...cartItems, item]),
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
