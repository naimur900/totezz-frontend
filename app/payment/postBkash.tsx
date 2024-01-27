export const postBkash = async (endPointURL: any, payload: any) => {
  try {
    const response = await fetch(endPointURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data: any = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log("Error occurred:", error);
  }
};
