"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import { createPayment, executePayment, queryPayment } from "./bkash";

const Page = () => {
  const searchParams = useSearchParams();
  const totalPrice = searchParams.get("totalPrice");
  const status = searchParams.get("status");
  const paymentID = searchParams.get("paymentID");
  const { cartDispatch } = useCartContext();
  const [msg, setMsg] = useState("");
  const [trxID, setTrxID] = useState("");

  const bkashHandler = async () => {
    try {
      const createPaymentRes = await createPayment(totalPrice);

      if (
        createPaymentRes.statusMessage === "Successful" &&
        createPaymentRes.statusCode === "0000"
      ) {
        window.location.replace(createPaymentRes.bkashURL);
        return;
      } else {
        const queryPaymentRes = await queryPayment(createPaymentRes.paymentID);
        // console.log(queryPaymentRes);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  useEffect(() => {
    console.log(paymentID, status);

    if (status === "success" && paymentID) {
      const handleExecutePayment = async () => {
        try {
          const executePaymentRes = await executePayment(paymentID);

          if (executePaymentRes.statusMessage === "Successful") {
            setTrxID(executePaymentRes.trxID);
            setMsg(executePaymentRes.statusMessage);
            cartDispatch({
              type: "REMOVE-ALL",
            });
          }
          //  else {
          //   console.error("Payment execution failed:", executePaymentRes);
          // }
        } catch (error) {
          console.error("Error executing payment:", error);
        }
      };

      handleExecutePayment();
    }
  }, [status, paymentID]);

  return (
    <div>
      <div className="flex flex-col gap-7 my-40 justify-center items-center">
        <h1>Pay using bKash</h1>
        <img
          className="w-32"
          src="https://freelogopng.com/images/all_img/1656234841bkash-icon-png.png"
          alt="bKash Logo"
        />
        {status === null ? (
          <>
            <h3 className="font-semibold">Pay: {totalPrice} tk</h3>
            <button
              className="btn bg-pink-600 text-white"
              onClick={bkashHandler}
            >
              Proceed
            </button>
          </>
        ) : (
          <div>
            {msg} {trxID}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
