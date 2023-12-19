const ProductOne = ({ product }: any) => {
  const { name, description, images, price } = product;
  return (
    <div>
      <div className="flex flex-row justify-center gap-x-32 items-center py-16">
        <div className="w-1/4">
          <img className="object-fit rounded-2xl" src={images[0]} alt="" />
        </div>
        <div className="flex flex-col">
          <div>
            <h1>{name}</h1>
            <h3>{description}</h3>
            <h3>{price}Tk</h3>
          </div>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default ProductOne;
