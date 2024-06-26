import Image from "next/image";
import mrugayan from "../../../public/assets/mrugayan.png";
import resorts from "../../../public/assets/resort.jpg";
import farmland from "../../../public/assets/farmland.jpg";
import weekend from "../../../public/assets/Weekend-Homes.jpg";

const Farmhouse = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center lg:h-screen flex items-center lg:px-10 py-10 mt-10"
        style={{ backgroundImage: "url('/assets/mango-tree.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#113c22] opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center w-full">
          <Image src={mrugayan} alt="pic" className="w-60" />
          <h1 className="lg:text-4xl text-[#e3bb3d] sm:text-xl md:text-xl sm:text-center">
            Kapil farms-one of its kind farmland investment
          </h1>
          <div className="w-full lg:flex justify-evenly lg:m-10 md:m-5 sm:m-5 gap-10">
            <div className="flex flex-col items-center">
              <Image src={resorts} alt="resort" className="w-[400px] border-white border-2 rounded-xl" />
              <h1 className="text-white font-bold text-2xl mt-5">RESORTS</h1>
            </div>
            <div className="flex flex-col items-center">
              <Image src={weekend} alt="resort" className="w-[400px]  border-white border-2 rounded-xl" />
              <h1 className="text-white font-bold text-2xl mt-5">VACATION HOMES</h1>
            </div>
            <div className="flex flex-col items-center">
              <Image src={farmland} alt="resort" className="w-[400px]  border-white border-2 rounded-xl" />
              <h1 className="text-white font-bold text-2xl mt-5">FARMLAND</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Farmhouse;
