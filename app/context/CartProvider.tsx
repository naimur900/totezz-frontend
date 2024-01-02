"use client";
import React, { useReducer } from "react";
import { CartContext } from "./CartContext";

const cartReducer = (cartState: any, action: any) => {
  const { name, _id, images, price, amount } = action.payload;

  let cartProduct = {
    _id,
    name,
    amount,
    images,
    price,
  };

  // To add to the cart
  switch (action.type) {
    case "ADD-TO-CART":
      const updatedCart = [...cartState.cart, cartProduct];
      const updatedTotalItem = updatedCart.reduce(
        (total, product) => total + product.amount,
        0
      );
      const updatedTotalAmount = updatedCart.reduce(
        (total, product) => total + product.amount * product.price,
        0
      );
      return {
        ...cartState,
        cart: updatedCart,
        totalItem: updatedTotalItem,
        totalAmount: updatedTotalAmount,
      };

    // To remove from cart
    case "REMOVE-FROM-CART":
      const removedProduct = cartState.cart.find(
        (productCart: any) => productCart._id === action.payload.pId
      );

      if (!removedProduct) {
        return cartState; // Product not found, return the current state
      }

      const updatedTotalItemAfterRemove =
        cartState.totalItem - removedProduct.amount;
      const updatedTotalAmountAfterRemove =
        cartState.totalAmount - removedProduct.amount * removedProduct.price;

      const updatedCartAfterRemove = cartState.cart.filter(
        (productCart: any) => productCart._id !== action.payload.pId
      );

      return {
        ...cartState,
        cart: updatedCartAfterRemove,
        totalItem: updatedTotalItemAfterRemove,
        totalAmount: updatedTotalAmountAfterRemove,
      };

    // To update the cart count
    // To update the cart count
    case "UPDATE-COUNT":
      const updatedCartAfterUpdate = cartState.cart.map((productCart: any) => {
        if (productCart._id === action.payload.pId) {
          return {
            ...productCart,
            amount:
              action.payload.increaseOperator === "+"
                ? productCart.amount + 1
                : productCart.amount - 1,
          };
        }
        return productCart;
      });

      const toggledProduct = cartState.cart.find(
        (productCart: any) => productCart._id === action.payload.pId
      );
      if (action.payload.increaseOperator === "+") {
        const UpdatedTotalItemAfterToggle =
          cartState.totalItem + toggledProduct.amount;
        const UpdatedTotalAmountAfterToggle =
          cartState.totalAmount + toggledProduct.amount * toggledProduct.price;
        return {
          ...cartState,
          cart: updatedCartAfterUpdate,
          totalItem: UpdatedTotalItemAfterToggle,
          totalAmount: UpdatedTotalAmountAfterToggle,
        };
      } else {
        const UpdatedTotalItemAfterToggle =
          cartState.totalItem - toggledProduct.amount;
        const UpdatedTotalAmountAfterToggle =
          cartState.totalAmount - toggledProduct.amount * toggledProduct.price;
        return {
          ...cartState,
          cart: updatedCartAfterUpdate,
          totalItem: UpdatedTotalItemAfterToggle,
          totalAmount: UpdatedTotalAmountAfterToggle,
        };
      }

    default:
      return cartState;
  }
};

const intitalState = {
  cart: [],
  totalItem: 0,
  totalAmount: 0,
  shippingFee: 60,
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, intitalState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
