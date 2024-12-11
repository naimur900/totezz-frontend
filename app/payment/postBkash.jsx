export const postBkash = async (endPointURL, payload) => {
  try {
    console.log("Inside post");

    const response = await fetch(endPointURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log("Error occurred:", error);
  }
};
