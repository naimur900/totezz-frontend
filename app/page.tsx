// import Accordian from "./components/Accordian";
import Card from "./components/Card";

const Home = async () => {
  const res = await fetch("http://localhost:5000/product/getall");
  const products = await res.json();
  // console.log(products);

  return (
    <div className="p-10">
      <div className="flex gap-5">
        {products.map((product: any) => {
          return <Card product={product} />;
        })}
      </div>
      <div className="p-10"></div>
      {/* <Accordian /> */}
    </div>
  );
};

export default Home;
