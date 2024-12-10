"use client";
import React, { useEffect, useReducer } from "react";
import { CartContext } from "./CartContext";

const cartReducer = (cartState, action) => {
  // To add to the cart
  switch (action.type) {
    case "ADD-TO-CART":
      const existingProductIndex = cartState.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingProductIndex === -1) {
        return [...cartState, action.payload];
      } else {
        return cartState;
      }

    case "UPDATE-CART":
      return cartState.map((item) =>
        // Merge existing item with updates
        item._id === action.payload._id
          ? { ...item, count: action.payload.count }
          : item
      );

    case "REMOVE-FROM-CART":
      return cartState.filter((item) => item._id !== action.payload._id);

    case "REMOVE-ALL": {
      return [];
    }

    default:
      return cartState;
  }
};

const intitalState = [];

const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, intitalState);

  useEffect(() => {
    let storedCart = localStorage.getItem("cart");
    storedCart = JSON.parse(storedCart);

    if (storedCart) {
      for (let i = 0; i < storedCart.length; i++) {
        cartDispatch({
          type: "ADD-TO-CART",
          payload: storedCart[i],
        });
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cartState));
    // console.log(cartState);
  }, [cartState]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
