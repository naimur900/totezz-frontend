// import Accordian from "./components/Accordian";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import HomeCenterText from "./components/HomeCenterText";

const Home = async () => {
  let products = [];
  try {
    const res = await fetch("http://localhost:3030/product/getall", {
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();

      // Check if data is an array
      products = Array.isArray(data) ? data : [];
      console.log(products);
    } else {
      console.error("Failed to fetch products:", res.statusText);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <div className="px-5 md:px-10">
      <Carousel />
      <HomeCenterText />
      <div
        id="viewProducts"
        className="text-2xl font-extrabold mb-16 text-center"
      >
        Tote Bags
      </div>
      {products.length > 0 ? (
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center flex-wrap justify-center mb-16">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-2xl font-extrabold mb-16 text-center">
          No products available.
        </div>
      )}
    </div>
  );
};

export default Home;
