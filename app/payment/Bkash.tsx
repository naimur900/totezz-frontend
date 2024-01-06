import axiosPost from "./post";

const bkash = async (amount: any) => {
  const createPayment = async (amount: any) => {
    const baseURL = "http://localhost:7000";
    const payload = { amount: amount };
    const headers = {};
    const res = await axiosPost(baseURL + "/createPayment", payload, headers);
    console.log(res);
    return res;
  };

  const executePayment = async (paymentID: String) => {
    const baseURL = "http://localhost:7000";
    const payload = { paymentID };
    const headers = {};
    const res = await axiosPost(baseURL + "/executePayment", payload, headers);
    return res;
  };

  const queryPayment = async (paymentID: String) => {
    const baseURL = "http://localhost:7000";
    const payload = { paymentID };
    const headers = {};
    const res = await axiosPost(baseURL + "/queryPayment", payload, headers);
    return res;
  };

  const createPaymentRes = await createPayment(amount);
  window.location.replace(createPaymentRes.bkashURL);
  console.log(createPaymentRes);
  if (createPaymentRes.statusMessage === "Successful") {
    const executePaymentRes = await executePayment(createPaymentRes.paymentID);
    console.log(executePaymentRes);
  } else {
    const queryPaymentRes = await queryPayment(createPaymentRes.paymentID);
    console.log(queryPaymentRes);
  }
};

export default bkash;
