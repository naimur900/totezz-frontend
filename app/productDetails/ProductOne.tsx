"use client";
import Link from "next/link";
import Button from "../components/Button";
import { useCart } from "../context/cartContext";

const ProductOne = ({ product }: any) => {
  const value: any = useCart();
  const { cartState, cartDispatch }: any = value;

  const { name, description, images, price } = product;
  return (
    <div>
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
          <div className="flex gap-3 my-3">
            <Button text={"Buy"} endpoint={""} color={"primary"} />
            <Link
              href={"/cart"}
              onClick={() =>
                cartDispatch({
                  type: "ADD-TO-CART",
                  payload: { name, description, images, price },
                })
              }
            >
              <Button text={"Add to Cart"} endpoint={""} color={"primary"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOne;
