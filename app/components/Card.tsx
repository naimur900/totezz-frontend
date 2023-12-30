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
        <div className="flex justify-between">
          <h2 className="card-title">{product.name}</h2>
          <h2 className="card-title">{product.price}Tk</h2>
        </div>

        <p>Stock:{product.stock}</p>
        <div className="card-actions justify-center">
          <Link
            className="btn btn-primary"
            href={{
              pathname: "/productDetails",
              query: { productId: product._id },
            }}
          >
            Show
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
