// "use client";
// import React, { useReducer } from "react";
// import { CartContext } from "./CartContext";

// const cartReducer = (cartState: any, action: any) => {
//   const { name, _id, images, price, amount } = action.payload;

//   let cartProduct = {
//     _id,
//     name,
//     amount,
//     images,
//     price,
//   };
//   switch (action.type) {
//     case "ADD-TO-CART":
//       const updatedCart = [...cartState.cart, cartProduct];
//       let updatedTotalItem = updatedCart.reduce(
//         (total, product) => total + product.amount,
//         0
//       );
//       let updatedTotalAmount = updatedCart.reduce(
//         (total, product) => total + product.amount * product.price,
//         0
//       );
//       return {
//         ...cartState,
//         cart: updatedCart,
//         totalItem: updatedTotalItem,
//         totalAmount: updatedTotalAmount,
//       };
//     // console.log(action.payload);
//     // return {
//     //   ...cartState,
//     //   cart: [...cartState.cart, cartProduct],
//     // };
//     case "REMOVE-FROM-CART":
//       const removedProduct = cartState.cart.find(
//         (productCart: any) => productCart._id === action.payload.pId
//       );

//       if (!removedProduct) {
//         return cartState; // Product not found, return the current state
//       }

//       updatedTotalItem = cartState.totalItem - removedProduct.amount;
//       updatedTotalAmount = cartState.totalAmount - removedProduct.amount * removedProduct.price;

//       const updatedCartAfterRemove = cartState.cart.filter(
//         (productCart: any) => productCart._id !== action.payload.pId
//       );

//       return {
//         ...cartState,
//         cart: updatedCartAfterRemove,
//         totalItem: updatedTotalItem,
//         totalAmount: updatedTotalAmount,
//       };
//     // return {
//     //   ...cartState,
//     //   cart: cartState.cart.filter(
//     //     (productCart: any) => productCart._id !== action.payload.pId
//     //   ),
//     // };

//     case "UPDATE-COUNT":
//       // const updatedProduct = cartState.cart.find(
//       //   (productCart: any) => productCart._id === action.payload.pId
//       // );

//       // if(action.payload.increaseOperator === "+"){
//       //     updatedProduct.map((item:any) => {
//       //       ...updatedProduct,
//       //       amount: item.amount+1
//       //     })

//       //     const updatedTotalItem = updatedCartAfterUpdate.reduce(
//       //       ({ total, product }: any) => total + product.amount,
//       //       0
//       //     );

//       //     const updatedTotalAmountAfterUpdate = updatedCartAfterUpdate.reduce(
//       //       ({ total, product }: any) => total + product.amount * product.price,
//       //       0
//       //     );

//       //     return {
//       //       ...cartState,
//       //       cart: updatedCartAfterUpdate,
//       //       totalItem: updatedTotalItem,
//       //       totalAmount: updatedTotalAmountAfterUpdate,
//       //     };
//       // }
//       // return updatedProduct;
//       // }
//       const updatedCartAfterUpdate = cartState.cart.map((productCart: any) => {
//         if (productCart._id === action.payload.pId) {
//           return {
//             ...productCart,
//             amount:
//               action.payload.increaseOperator === "+"
//                 ? productCart.amount + 1
//                 : productCart.amount - 1,
//           };
//         }
//         return productCart;
//       });

//       updatedTotalItem = updatedCartAfterUpdate.reduce(
//         ({ total, product }: any) => total + product.amount,
//         0
//       );

//       updatedTotalAmount = updatedCartAfterUpdate.reduce(
//         ({ total, product }: any) => total + product.amount * product.price,
//         0
//       );

//       return {
//         ...cartState,
//         cart: updatedCartAfterUpdate,
//         totalItem: updatedTotalItem,
//         totalAmount: updatedTotalAmount,
//       };

//     // const updatedCartAfterUpdate = cartState.cart.map((item: any) => {
//     //   if (item._id === action.payload.pId) {
//     //     if (action.payload.increaseOperator === "+") {
//     //       const updatedProduct: any = {
//     //         ...item,
//     //         amount: item.amount + 1,
//     //       };
//     //       return updatedProduct;
//     //     } else if (action.payload.decreaseOperator === "-") {
//     //       const updatedProduct: any = {
//     //         ...item,
//     //         amount: item.amount - 1,
//     //       };
//     //       return updatedProduct;
//     //     }
//     //   }
//     //   return item;
//     // });

//     // if (action.payload.increaseOperator === "+") {
//     //   const updatedTotalItem = updatedCartAfterUpdate.reduce(
//     //     ({ total, product }: any) => total + product.amount,
//     //     0
//     //   );

//     //   const updatedTotalAmountAfterUpdate = updatedCartAfterUpdate.reduce(
//     //     ({ total, product }: any) => total + product.amount * product.price,
//     //     0
//     //   );

//     //   return {
//     //     ...cartState,
//     //     cart: updatedCartAfterUpdate,
//     //     totalItem: updatedTotalItem,
//     //     totalAmount: updatedTotalAmountAfterUpdate,
//     //   };
//     // } else if (action.payload.operator === "-") {
//     //   const updatedTotalItemAfterUpdate = updatedCartAfterUpdate.reduce(
//     //     ({ total, product }: any) => total - product.amount,
//     //     0
//     //   );

//     //   const updatedTotalAmountAfterUpdate = updatedCartAfterUpdate.reduce(
//     //     ({ total, product }: any) => total - product.amount * product.price,
//     //     0
//     //   );
//     //   return {
//     //     ...cartState,
//     //     cart: updatedCartAfterUpdate,
//     //     totalItem: updatedTotalItemAfterUpdate,
//     //     totalAmount: updatedTotalAmountAfterUpdate,
//     //   };
//     // }

//     // return {
//     //   ...cartState,
//     //   cart: updatedCartAfterUpdate,
//     //   totalItem: updatedTotalItemAfterUpdate,
//     //   totalAmount: updatedTotalAmountAfterUpdate,
//     // };

//     // return {
//     //   ...cartState,
//     //   cart: cartState.cart.map((productCart: any) => {
//     //     if (productCart._id === action.payload.pId) {
//     //       return {
//     //         ...productCart,
//     //         amount: action.payload.amountCart,
//     //       };
//     //     }
//     //     return productCart;
//     //   }),
//     // };

//     default:
//       return cartState;
//   }
// };

// const intitalState = {
//   cart: [],
//   totalItem: "",
//   totalAmount: "",
//   shippingFee: 60,
// };

// const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cartState, cartDispatch] = useReducer(cartReducer, intitalState);

//   return (
//     <CartContext.Provider value={{ cartState, cartDispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
