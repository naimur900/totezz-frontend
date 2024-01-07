"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Card = ({ product }: any) => {
  const router = useRouter();
  return (
    <div className="card card-compact lg:w-1/5 sm:w-1/3 bg-base-100 shadow-xl">
      <figure className="w-fit object-cover">
        <img src={product.images[0]} alt="Bag" />
      </figure>
      <div className="card-body">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <div className="flex justify-between text-base">
          <p className="font-bold">Price:{product.price} </p>
          <p className="text-end">Stock:{product.stock}</p>
        </div>
        <div className="flex justify-center text-sm my-4">
          <button className="btn btn-warning">
            <Link
              href={{
                pathname: "/productDetails",
                query: { productId: product._id },
              }}
            >
              View
            </Link>
          </button>

          {/* <button className="btn btn-warning w-1/2">
            <Link
              href={{
                pathname: "",
                query: { productId: product._id },
              }}
            >
              Add to Cart
            </Link>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
