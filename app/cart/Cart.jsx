"use client";
import { useEffect } from "react";
import { useCartContext } from "../context/CartContext";

const Cart = ({ item }) => {
  const { cartState, cartDispatch } = useCartContext();

  useEffect(() => {
    console.log(cartState);
  }, [cartState]);

  return (
    <>
      <tr className="text-center">
        {/* <td>{item._id}</td> */}
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <div className="flex gap-5 justify-center items-center">
            <button
              className="btn btn-warning"
              onClick={() => {
                if (item.count <= 5 && item.count > 0) {
                  cartDispatch({
                    type: "UPDATE-CART",
                    payload: {
                      _id: item._id,
                      count: item.count - 1,
                    },
                  });
                }
              }}
            >
              -
            </button>
            <div>{item.count}</div>
            <button
              className="btn btn-warning"
              onClick={() => {
                if (item.count < 5 && item.count >= 0) {
                  cartDispatch({
                    type: "UPDATE-CART",
                    payload: {
                      _id: item._id,
                      count: item.count + 1,
                    },
                  });
                }
              }}
            >
              +
            </button>
          </div>
        </td>
        <td>{item.count * item.price}</td>
        <td>
          <button
            className="btn btn-accent"
            onClick={() => {
              cartDispatch({
                type: "REMOVE-FROM-CART",
                payload: { _id: item._id },
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
