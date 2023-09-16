import Navbar from "../Fragments/Navbar";
import Tab from "../Components/Body/Stores/Detail-Tab-Product";
import Detailproduct from "../Components/Body/Stores/Detail-Body-Product";
import "../Style/Desc-book.css";

const ProductDetail = () => {
  return (
    <>
      <Navbar />
      <div className="container h-full mt-[1rem] ml-auto mr-auto">
        <div className="body-product flex flex-col justify-between md:flex-row gap-4 lg:flex-row">
          <div className="flex flex-col gap-5 md:w-[50%] lg:w-[35%] ">
            <Detailproduct.img />
          </div>
          <div className="post  rounded-lg relative  md:w-[60%] lg:w-[65%] xl:w-[100%] flex flex-col gap-10 justify-between">
            <div className="bg-white  rounded-lg relative top-0 pb-12">
              <Detailproduct.tittle />
              <Tab />
            </div>
            <div className=" rounded-lg bg-white">
              <Detailproduct.button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
