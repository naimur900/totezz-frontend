const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-8 md:gap-16 justify-center items-center bg-orange-200 p-8 md:p-16 mb-0">
        <div>
          <h1 className="font-extrabold text-3xl">Totezz</h1>
        </div>
        <div className="flex flex-row justify-around gap-11">
          <div className="flex flex-col">
            <div>
              <h3 className="font-bold">About</h3>
            </div>
            <div>
              <ul>
                <li>Totezz</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <h3 className="font-bold">Follow us</h3>
            </div>
            <div>
              <ul>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <h3 className="font-bold">Legal</h3>
            </div>
            <div>
              <ul>
                <li>Privacy policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
