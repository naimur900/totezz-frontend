import ProductOne from "./ProductOne";

const page = async ({ searchParams }) => {
  const productId = searchParams.productId;
  // console.log(searchParams.productId);
  // console.log(typeof productId);

  try {
    const res = await fetch(
      `http://localhost:3030/product/getone/${productId}`,
      { cache: "no-store" }
    );
    const product = await res.json();

    // console.log(product);

    return product ? <ProductOne product={product} /> : null;
  } catch (error) {
    console.log("Error occurred:", error);
    return null;
  }
};

export default page;
