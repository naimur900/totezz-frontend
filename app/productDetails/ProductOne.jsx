"use client";

const ProductOne = ({ product }) => {
  // const value = useCart();
  // const { cartState, cartDispatch } = value;
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   // This useEffect will run whenever cartState changes
  //   console.log(cartState.cart);
  // }, [cartState.cart]);

  // const cartIncrease = () => {
  //   if (count < 5) {
  //     // setCount(count + 1);
  //     setCount((prevCount) => prevCount + 1);
  //   }
  // };

  // const cartDecrease = () => {
  //   if (count > 0) {
  //     // setCount(count - 1);
  //     setCount((prevCount) => prevCount - 1);
  //   }
  // };
  const { _id, name, description, images, price } = product;
  // const image = images[0];
  return (
    <div className="container p-7 flex flex-col items-center justify-center gap-7 md:flex-row md:p-12 md:gap-10 lg:gap-14 lg:p-20 xl:p-28">
      <img
        className="object-fit rounded-2xl w-4/6 md:w-2/5 lg:w-2/6"
        src={images[0]}
        alt=""
      />
      <div className="flex flex-col justify-center items-center text-center md:w-3/5 lg:3/6">
        <div>
          <h1>{name}</h1>
          <h3>{description}</h3>
          <h3 className="font-semibold mt-7 text-xl">{price}Tk</h3>
        </div>
        <div className="flex gap-6 my-10">
          <div className="flex justify-center items-center gap-6">
            <button className="btn btn-warning">+</button>
            <div className="text-black">2</div>
            <button className="btn btn-warning">-</button>
          </div>

          <div>
            <button
              className="btn btn-primary"
              // onClick={() => {
              //   // cartDispatch({
              //   //   type: "ADD-TO-CART",
              //   //   payload: { _id, name, image, count, price },
              //   // });
              //   // alert("Successfully added to cart");
              // }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOne;

{
  /* <div>
<div className="flex flex-row justify-center gap-x-9 items-center py-16 mx-14">
  <div className="w-1/2 p-16">
    <img
      className="object-fit rounded-2xl w-auto"
      src={images[0]}
      alt=""
    />
  </div>
  <div className="flex flex-col w-1/2 p-16 items-center">
    <div>
      <h1>{name}</h1>
      <h3>{description}</h3>
      <h3 className="font-semibold mt-7 text-xl">{price}Tk</h3>
    </div>
    <div className="flex gap-6 my-10">
      <div className="flex justify-center items-center gap-6">
        <button className="btn btn-warning" onClick={cartIncrease}>
          +
        </button>
        <div className="text-black">{count}</div>
        <button className="btn btn-warning" onClick={cartDecrease}>
          -
        </button>
      </div>

      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            cartDispatch({
              type: "ADD-TO-CART",
              payload: { _id, name, image, count, price },
            });
            alert("Successfully added to cart");
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</div>
</div> */
}
