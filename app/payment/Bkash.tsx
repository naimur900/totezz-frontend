// import axiosPost from "./post";
import { postBkash } from "./postBkash";

const createPayment = async (amount: any) => {
  const baseURL = "http://localhost:7000";
  const payload = { amount: amount };
  const res = await postBkash(baseURL + "/createPayment", payload);
  return res;
};

const executePayment = async (paymentID: String) => {
  const baseURL = "http://localhost:7000";
  const payload = { paymentID };
  const res = await postBkash(baseURL + "/executePayment", payload);
  return res;
};

const queryPayment = async (paymentID: String) => {
  const baseURL = "http://localhost:7000";
  const payload = { paymentID };
  const res = await postBkash(baseURL + "/queryPayment", payload);
  return res;
};

export { createPayment, executePayment, queryPayment };
