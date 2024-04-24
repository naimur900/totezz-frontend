// import Accordian from "./components/Accordian";

import Card from "./components/Card";
import Carousel from "./components/Carousel";
import HomeCenterText from "./components/HomeCenterText";

const Home = async () => {
  const res = await fetch("http://localhost:7000/product/getall", {
    cache: "no-store",
  });
  const products = await res.json();

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
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center flex-wrap justify-center mb-16">
        {products.map((product: any) => {
          return <Card key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
