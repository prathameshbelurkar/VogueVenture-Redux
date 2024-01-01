import { createContext, useState } from "react";

const isCartOpenedInitially = false;

export const CartContext = createContext({
  isCartOpen: isCartOpenedInitially,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(isCartOpenedInitially);
  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
