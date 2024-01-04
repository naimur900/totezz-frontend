"use client";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import ProductOne from "../productDetails/ProductOne";
import Cart from "./Cart";

const cartPage = () => {
  const { cartIncrease, cartDecrease }: any = ProductOne;
  const value: any = useCart();
  const { cartState, cartDispatch } = value;
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let calculatedTotalItem = 0;
    let calculatedTotalPrice = 0;
    cartState.cart.forEach((product: any) => {
      calculatedTotalItem += product.count;
      calculatedTotalPrice += product.count * product.price;
    });

    setTotalItem(calculatedTotalItem);
    setTotalPrice(calculatedTotalPrice);
  }, [cartState]);

  return (
    <>
      <div className="overflow-x-auto p-24 m-10">
        {cartState.cart.length > 0 ? (
          <>
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-center font-extrabold">
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartState.cart.map((productCart: any) => {
                  // totalSum += productCart.price * productCart.amount;
                  // totalItem += 1;
                  return (
                    <Cart
                      key={productCart._id}
                      productCart={productCart}
                      // cartIncrease={cartIncrease}
                      // cartDecrease={cartDecrease}
                      cartState={cartState}
                      cartDispatch={cartDispatch}
                    />
                  );
                })}
              </tbody>
            </table>
            {/* <hr className="my-8" /> */}
            <div className="flex justify-between items-center my-16">
              <div>
                <h3>Total:{totalPrice}</h3>
                <h3>TotalItem:{totalItem}</h3>
                <h3>Shipping Price: 60 tk</h3>
              </div>
              <div>
                <button className="btn btn-warning">Proceed to Checkout</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-center">Your cart is empty</h1>
          </>
        )}
      </div>
    </>
  );
};

export default cartPage;
