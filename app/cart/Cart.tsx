"use client";

const Cart = ({
  productCart,
  cartIncrease,
  cartDecrease,
  cartState,
  cartDispatch,
}: any) => {
  const pId = productCart._id;
  // const [amountCart, setAmount] = useState(productCart.amount);
  const inceraseOperator = "+";
  const decreaseOperator = "-";
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
                // console.log(amountCart);

                if (productCart.amount < 5) {
                  // setAmount(amountCart + 1);
                  cartDispatch({
                    type: "UPDATE-COUNT",
                    payload: { pId, inceraseOperator },
                  });
                  console.log(cartState);
                }
              }}
            >
              +
            </button>
            <div>{productCart.amount}</div>
            <button
              className="btn btn-warning"
              onClick={() => {
                if (productCart.amount > 0) {
                  // setAmount(amountCart - 1);
                  cartDispatch({
                    type: "UPDATE-COUNT",
                    payload: { pId, decreaseOperator },
                  });
                  console.log(cartState);
                }
              }}
            >
              -
            </button>
          </div>
        </td>
        <td>{productCart.amount * productCart.price}</td>
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
