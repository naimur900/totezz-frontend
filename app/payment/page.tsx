"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { createPayment, executePayment, queryPayment } from "./bkash";

const page = async () => {
  const searchParams = useSearchParams();
  const totalPrice = searchParams.get("totalPrice");
  const status: any = searchParams.get("status");
  const paymentID: any = searchParams.get("paymentID");
  const [msg, setMsg] = useState("");

  const bkashHandler = async () => {
    try {
      const createPaymentRes = await createPayment(totalPrice);
      console.log(createPaymentRes);

      if (createPaymentRes.statusMessage === "Successful") {
        window.location.replace(createPaymentRes.bkashURL);
      } else {
        const queryPaymentRes = await queryPayment(createPaymentRes.paymentID);
        console.log(queryPaymentRes);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  if (status === "success") {
    const executePaymentRes = await executePayment(paymentID);
    if (executePaymentRes.statusMessage === "Successful") {
      setMsg(executePaymentRes.statusMessage);
    }
  }
  // useEffect(() => {
  //   if (status === "success") {
  //   }
  // }, [msg]);

  return (
    <div>
      <div className="flex flex-col gap-7 my-40 justify-center items-center">
        <h1>Pay using bKash</h1>
        <img
          className="w-32"
          src="https://freelogopng.com/images/all_img/1656234841bkash-icon-png.png"
          alt=""
        />
        {status === null ? (
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
          <div>{msg}</div>
        )}
      </div>
    </div>
  );
};

export default page;
