import ProductOne from "./ProductOne";

const page = async ({ searchParams }: any) => {
  const productId = searchParams.productId;
  console.log(searchParams.productId);

  try {
    const response = await fetch("http://localhost:5000/product/getone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: productId,
      }),
    });
    const product = await response.json();
    // console.log(product);

    return product ? <ProductOne product={product} /> : null;
    // console.log(product);
  } catch (error) {
    console.log("Error occurred:", error);
    return null;
  }
};

export default page;
