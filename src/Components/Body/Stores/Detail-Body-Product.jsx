import { useState } from "react";
import "../../../Style/Desc-book.css";

const Detailproduct = (props) => {
  const { children } = props;
  return { children };
};

const img = () => {
  const [images, setImages] = useState({
    img1: "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/52314/199006/1.jpg",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  return (
    <>
      <div className="img-container flex flex-col gap-5 md:sticky lg:sticky top-0">
        <div className="wrap-main-img bg-white w-[345px] h-[345px] object-contain py-[2rem] px-[1rem] mr-auto ml-auto rounded-lg flex justify-center items-center">
          <img
            src={activeImg}
            alt=""
            className="main-img w-[305px] h-[305px] bg-white object-contain "
          />
        </div>
        <div className="wrap-card-img-product flex flex-row justify-center gap-2 h-24">
          <img
            src={images.img1}
            alt=""
            className="card-img-product w-20 h-30 p-2 rounded-md cursor-pointer object-contain bg-white  hover:border-2 hover:border-second"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="card-img-product w-20 h-30 p-2 rounded-md cursor-pointer object-contain bg-white  hover:border-2 hover:border-second"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="card-img-product w-20 h-30 p-2 rounded-md cursor-pointer object-contain bg-white hover:border-2 hover:border-second"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="card-img-product w-20 h-30 p-2 rounded-md cursor-pointer object-contain bg-white hover:border-2 hover:border-second"
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
    </>
  );
};

const tittle = () => {
  return (
    <>
      <h3 className="bg-white text-[#808080] mt-2 mb-2 ml-2">Penulis</h3>
      <h1 className="bg-white font-['Inter'] mb-7 ml-2 lg:mb-12 text-2xl font-semibold ">
        Strobe Edge - 10
      </h1>
      <hr className="border-[#bab7b7] opacity-70" />
    </>
  );
};

const button = () => {
  return (
    <>
      <div className="flex items-center bg-white justify-between p-2 mx-1 mt-2 mb-2">
        <span className="text-3xl font-bold bg-white text-tertiary">
          Rp 100.000
        </span>
        <button>
          <a
            href="Checkout"
            className="rounded-full px-3 py-3 text-lg text-white font-semibold uppercase border-2 border-second bg-second hover:text-second hover:bg-white transsition duration-200 ease-in-out"
          >
            Beli Sekarang
          </a>
        </button>
      </div>
    </>
  );
};

Detailproduct.img = img;
Detailproduct.tittle = tittle;
Detailproduct.button = button;
export default Detailproduct;
