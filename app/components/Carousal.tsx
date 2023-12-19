const Carousal = () => {
  return (
    <div className="carousel rounded-box flex overflow-hidden my-12">
      <div className="carousel-item flex-shrink-0 h-64">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="carousel-item flex-shrink-0 h-64">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/3607627/pexels-photo-3607627.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Burger"
        />
      </div>
      <div className="carousel-item flex-shrink-0 h-64">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/9324371/pexels-photo-9324371.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Burger"
        />
      </div>
      <div className="carousel-item flex-shrink-0 h-64">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/14481421/pexels-photo-14481421.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Burger"
        />
      </div>
      <div className="carousel-item flex-shrink-0 h-64">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Burger"
        />
      </div>
      <div className="carousel-item flex-shrink-0 h-64">
        <img
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/3607627/pexels-photo-3607627.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Burger"
        />
      </div>
      {/* Add more carousel items with images here */}
    </div>
  );
};

export default Carousal;
