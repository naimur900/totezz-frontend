"use client";
import { useEffect } from "react";
const Cart = ({ productCart, cartState, cartDispatch }: any) => {
  const pId = productCart._id;
  const inceraseOperator = "+";
  const decreaseOperator = "-";

  useEffect(() => {
    console.log(cartState.cart);
  }, [cartState.cart]);

  return (
    <>
      <tr className="text-center">
        {/* <td>{productCart._id}</td> */}
        <td>{productCart.name}</td>
        <td>{productCart.price}</td>
        <td>
          <div className="flex gap-5 justify-center items-center">
            <button
              className="btn btn-warning"
              onClick={() => {
                if (productCart.count <= 5 && productCart.count > 0) {
                  cartDispatch({
                    type: "UPDATE-COUNT",
                    payload: { pId, decreaseOperator },
                  });
                }
              }}
            >
              -
            </button>
            <div>{productCart.count}</div>
            <button
              className="btn btn-warning"
              onClick={() => {
                if (productCart.count < 5 && productCart.count >= 0) {
                  cartDispatch({
                    type: "UPDATE-COUNT",
                    payload: { pId, inceraseOperator },
                  });
                }
              }}
            >
              +
            </button>
          </div>
        </td>
        <td>{productCart.count * productCart.price}</td>
        <td>
          <button
            className="btn btn-accent"
            onClick={(productCart) => {
              cartDispatch({
                type: "REMOVE-FROM-CART",
                payload: { pId },
              });
            }}
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default Cart;
