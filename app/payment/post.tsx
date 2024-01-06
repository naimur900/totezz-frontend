import axios from "axios";
const axiosPost = async (endPointURL: any, payload: any, headers: any) => {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 30000);

  const { data } = await axios({
    method: "post",
    url: endPointURL,
    data: payload,
    headers: headers,
    signal: controller.signal,
  });

  clearTimeout(timeout);
  if (data.errorMessage) throw new Error(data.errorMessage);
  return data;
};

export default axiosPost;
