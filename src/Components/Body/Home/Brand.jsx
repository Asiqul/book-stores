import Subtitle from "./Subtitle";

const Brand = () => {
  return (
    <div className="container mx-auto">
      <div className="my-6">
        <Subtitle title="Brand Pilihan" />
      </div>
      <div className="gap-4 grid grid-cols-6">
        <img className="object-contain border w-full h-[100px] shadow-md" src="./public/brand/brand1.png"alt="brand" />
        <img className="object-contain border w-full h-[100px] shadow-md" src="./public/brand/brand2.png"  alt="brand" />
        <img className="object-contain border w-full h-[100px] shadow-md" src="./public/brand/brand3.png" alt="brand" />
        <img className="object-contain border w-full h-[100px] shadow-md" src="./public/brand/brand4.png" alt="brand" />
        <img className="object-contain border w-full h-[100px] shadow-md" src="./public/brand/brand5.jpeg" alt="brand"/>
        <img className="object-contain border w-full h-[100px] shadow-md" src="./public/brand/brand6.png" alt="brand" />
      </div>
    </div>
  );
};

export default Brand;
