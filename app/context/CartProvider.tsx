"use client";
import React, { useReducer } from "react";
import { CartContext } from "./CartContext";

const cartReducer = (cartState: any, action: any) => {
  // To add to the cart
  switch (action.type) {
    case "ADD-TO-CART":
      return {
        ...cartState,
        cart: [...cartState.cart, action.payload],
      };

    // To remove from cart
    case "REMOVE-FROM-CART":
      return {
        ...cartState,
        cart: cartState.cart.filter(
          (productCart: any) => productCart._id !== action.payload.pId
        ),
      };

    // To update the cart count
    case "UPDATE-COUNT":
      return {
        ...cartState,
        cart: cartState.cart.map((productCart: any) => {
          if (productCart._id === action.payload.pId) {
            return {
              ...productCart,
              count:
                action.payload.inceraseOperator === "+"
                  ? productCart.count + 1
                  : productCart.count - 1,
            };
          } else {
            return productCart;
          }
        }),
      };

    default:
      return cartState;
  }
};

const intitalState: any = { cart: [] };

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, intitalState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
