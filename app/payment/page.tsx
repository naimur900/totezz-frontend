"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import bkash from "./bkash";

const page = () => {
  const searchParams = useSearchParams();
  const totalPrice = searchParams.get("totalPrice");
  const status: any = searchParams.get("status");
  const [msg, setMsg] = useState("");

  const bkashHandler = () => {
    try {
      bkash(totalPrice);
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  useEffect(() => {
    if (status === "success") {
      setMsg(status);
    }
  }, [msg]);

  return (
    <div>
      <div className="flex flex-col gap-7 my-40 justify-center items-center">
        <h1>Pay using bKash</h1>
        <img
          className="w-32"
          src="https://freelogopng.com/images/all_img/1656234841bkash-icon-png.png"
          alt=""
        />

        {msg !== "success" ? (
          <>
            <h3 className="font-semibold">Pay: {totalPrice} tk</h3>
            <button
              className="btn bg-pink-600 text-white"
              onClick={bkashHandler}
            >
              Procceed
            </button>
          </>
        ) : (
          <h1>{msg}</h1>
        )}
      </div>
    </div>
  );
};

export default page;
