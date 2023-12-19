const Card = ({ product }: any) => {
  return (
    <div className="card card-compact lg:w-1/5 sm:w-1/3 bg-base-100 shadow-xl">
      <figure className="w-fit object-cover">
        <img
          src={product.images[0]}
          alt="Shoes"
          // className="w-auto object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{product.name}</h2>
          <h2 className="card-title">{product.price}Tk</h2>
        </div>

        <p>{product.description}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
