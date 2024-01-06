// import Accordian from "./components/Accordian";

import Card from "./components/Card";
import Carousal from "./components/Carousal";
import HomeCenterText from "./components/HomeCenterText";

const Home = async () => {
  const res = await fetch("http://localhost:5000/product/getall", {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div className="px-10">
      <Carousal />
      <HomeCenterText />
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center justify-center">
        {products.map((product: any) => {
          return <Card key={product._id} product={product} />;
        })}
      </div>
      <div className="p-10"></div>
    </div>
  );
};

export default Home;
