"use client";
import React, { useReducer } from "react";
import { CartContext } from "./cartContext";

const cartReducer = (cartState: any, action: any) => {
  switch (action.type) {
    case "ADD-TO-CART":
      console.log(action.payload);
    default:
      return cartState;
  }
};

const intitalState = {
  cart: [],
  totalItem: "",
  totalAmount: "",
  shippingFee: 5000,
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, intitalState);

  return (
    <CartContext.Provider value={{ ...cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
