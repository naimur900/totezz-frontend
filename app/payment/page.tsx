"use client";
import { useSearchParams } from "next/navigation";
import Bkash from "./Bkash";

const page = () => {
  const searchParams = useSearchParams();
  const totalPrice = searchParams.get("totalPrice");
  const price = totalPrice;

  const bkashHandler = () => {
    Bkash();
  };

  return (
    <div>
      <div className="flex flex-col gap-7 my-40 justify-center items-center">
        <h1>Pay using bKash</h1>
        <img
          className="w-32"
          src="https://freelogopng.com/images/all_img/1656234841bkash-icon-png.png"
          alt=""
        />
        <h3 className="font-semibold">Pay: {totalPrice} tk</h3>
        <button className="btn bg-pink-600 text-white" onClick={bkashHandler}>
          Procceed
        </button>
      </div>
    </div>
  );
};

export default page;
