// import axiosPost from "./post";
import { postBkash } from "./postBkash";

const createPayment = async (amount) => {
  const baseURL = "http://localhost:3030";
  const payload = { amount: amount };
  console.log("cpJod");

  const res = await postBkash(baseURL + "/createPayment", payload);
  return res;
};

const executePayment = async (paymentID) => {
  console.log("Execute ae ashlam");
  const baseURL = "http://localhost:3030";
  const payload = { paymentID };
  const res = await postBkash(baseURL + "/executePayment", payload);
  return res;
};

const queryPayment = async (paymentID) => {
  const baseURL = "http://localhost:3030";
  const payload = { paymentID };
  const res = await postBkash(baseURL + "/queryPayment", payload);
  return res;
};

export { createPayment, executePayment, queryPayment };
