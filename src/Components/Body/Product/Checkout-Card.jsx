import { BsPlusCircleFill } from "react-icons/bs";
import { BiSolidMinusCircle } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useState } from "react";

function CheckoutCard() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(29000);
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    setQuantity((c) => Math.max(c - 1, 1));
  };

  return (
    <>
      <div className="card sticky top-24 hidden lg:block">
        <div className="py-8 px-4 bg-white rounded-xl">
          <div className="bg-transparent">
            <h2 className="font-semibold text-border">Ingin beli berapa?</h2>
          </div>
          <div className="mt-4 bg-transparent">
            <h3 className="font-semibold text-sm">Jumlah Barang</h3>
          </div>
          <div className="bg-transparent flex mt-1 items-center">
            <button
              className="bg-transparent rounded-full"
              onClick={handleDecrease}
            >
              <IconContext.Provider
                value={{
                  className:
                    "fill-second rounded-full bg-transparent transition duration-200",
                  size: "1.5rem",
                }}
              >
                <BiSolidMinusCircle />
              </IconContext.Provider>
            </button>
            <h4 className="w-10 text-center mr-[2px]">{quantity}</h4>
            <button
              className="bg-transparent rounded-full"
              onClick={handleIncrease}
            >
              <IconContext.Provider
                value={{
                  className:
                    "fill-second rounded-full bg-transparent transition duration-200",
                  size: "1.2rem",
                }}
              >
                <BsPlusCircleFill />
              </IconContext.Provider>
            </button>
          </div>
          <div className="mt-6 py-6 flex flex-col gap-4 bg-transparent border-t-2 border-border border-opacity-50">
            <div className="bg-transparent mb-2 flex flex-wrap gap-2 justify-between">
              <h3 className="font-semibold text-sm">Total Harga</h3>
              <h4 className="text-second font-semibold">
                {rupiah(price * quantity)}
              </h4>
            </div>
            <button className="w-full py-2 text-second font-semibold rounded-full border-2 border-second hover:bg-second hover:text-white transition duration-200 ease-in-out">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 bg-white border-t-2 border-border border-opacity-50 lg:hidden w-full py-2 z-50">
        <div className="container mx-auto flex flex-col bg-transparent items-center">
          <div className="bg-transparent w-full flex justify-between items-center py-4 border-b-2 border-border border-opacity-50">
            <h2 className="font-semibold">Jumlah Barang</h2>
            <div className="bg-transparent flex mt-1 items-center">
              <button
                className="bg-transparent rounded-full"
                onClick={handleDecrease}
              >
                <IconContext.Provider
                  value={{
                    className:
                      "fill-second rounded-full bg-transparent transition duration-200",
                    size: "1.9rem",
                  }}
                >
                  <BiSolidMinusCircle />
                </IconContext.Provider>
              </button>
              <h4 className="w-10 text-center mr-[2px]">{quantity}</h4>
              <button
                className="bg-transparent rounded-full"
                onClick={handleIncrease}
              >
                <IconContext.Provider
                  value={{
                    className:
                      "fill-second rounded-full bg-transparent transition duration-200",
                    size: "1.6rem",
                  }}
                >
                  <BsPlusCircleFill />
                </IconContext.Provider>
              </button>
            </div>
          </div>
          <div className="bg-transparent w-full flex justify-between py-4">
            <h3 className="font-semibold text-sm">Total Harga</h3>
            <h4 className="text-second font-semibold">
              {rupiah(price * quantity)}
            </h4>
          </div>
          <div className="bg-transparent w-1/2 pb-6">
            <button className="w-full py-2 text-second font-semibold rounded-full border-2 border-second hover:bg-second hover:text-white transition duration-200 ease-in-out">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutCard;
