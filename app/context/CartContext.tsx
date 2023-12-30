import { createContext, useContext } from "react";

const CartContext = createContext({});

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Value must be used within a UserProvider");
  }
  return context;
};
export { CartContext, useCart };
