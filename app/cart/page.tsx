"use client";
import { useCart } from "../context/CartContext";
import ProductOne from "../productDetails/ProductOne";
import Cart from "./Cart";

const cartPage = () => {
  const { cartIncrease, cartDecrease }: any = ProductOne;
  const value: any = useCart();
  const { cartState, cartDispatch } = value;
  const { cart } = cartState;
  let totalSum = 0;
  let totalItem = 0;

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
                {cart.map((productCart: any) => {
                  totalSum += productCart.price * productCart.amount;
                  totalItem += 1;
                  return (
                    <Cart
                      key={productCart._id}
                      productCart={productCart}
                      cartIncrease={cartIncrease}
                      cartDecrease={cartDecrease}
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
                <h3>Total:{cartState.totalAmount}</h3>
                <h3>TotalItem:{cartState.totalItem}</h3>
                <h3>Shipping Price:{cartState.shippingFee}</h3>
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
