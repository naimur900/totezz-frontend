import axiosPost from "./post";

const Bkash = async () => {
  //   const [msg, setMsg] = useState("");
  //   const [paymentID, setPaymentID] = useState("");
  //   const [status, setStatus] = useState("");

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
    console.log(res);
    return res;
  };

  const queryPayment = async (paymentID: String) => {
    const baseURL = "http://localhost:7000";
    const payload = { paymentID };
    const headers = {};
    const res = await axiosPost(baseURL + "/queryPayment", payload, headers);
    console.log(res);
    return res;
  };

  const createPaymentRes = await createPayment("200");
  window.location.replace(createPaymentRes.bkashURL);
  console.log(createPaymentRes);
  if (createPaymentRes.statusMessage === "Successful") {
    const executePaymentRes = await executePayment(createPaymentRes.paymentID);
    console.log(executePaymentRes);
  } else {
    const queryPaymentRes = await queryPayment(createPaymentRes.paymentID);
    console.log(queryPaymentRes);
  }

  //   setPaymentID(createPaymentRes.paymentID);
  //   setStatus(createPaymentRes.status);
  // window.location.replace(createPaymentRes.bkashURL);

  //   if (paymentID !== "") {
  //     if (status === "success") {
  //       const executePaymentRes = await executePayment(paymentID);
  //       console.log(executePaymentRes);
  //       setMsg(executePaymentRes.statusMessage);
  //     } else {
  //       const data = await queryPayment(paymentID);
  //       console.log(data);
  //       setMsg(status);
  //     }
  //   }

  //   return <div>{msg != "" ? <h1>{msg}</h1> : <h1>Nothing happend</h1>}</div>;
  return <div>Jodd</div>;
};

export default Bkash;
