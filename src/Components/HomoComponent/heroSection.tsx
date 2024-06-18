import Image from "next/image";
import gif from "../../../public/assets/form_bg.gif";
const HeroSection = () => {
  return (
    <section className="bg-[url('/assets/LP-image.png')] bg-cover h-screen rounded-3xl flex align-items-center">
      <div className="w-1/2 px-12">
        <h1 className="bottom-0  text-white font-bold absolute px-5 md:text-6xl uppercase tracking-wider ">
          Venture into the land <br />
          of limitless possibilities!
        </h1>
      </div>
      <div className="w-1/2 flex items-end justify-center flex-col relative px-12">
        <div className="bg-lightgolden  rounded-2xl max-w-[500px]">
          <div className="px-8 py-8">
            <p className="text-center">
              If you are looking to buy farmland in Hyderabad,
            </p>
            <p className="text-center font-bold">now is a great time !</p>
            <p className="uppercase text-center font-bold text-lg mt-5">
              contact us
            </p>
          </div>

          <form action="" className="mt-1 flex flex-col items-center px-8">
            <input
              type="text"
              className="bg-lightgolden border-b   py-1  focus:outline-none w-full mt-2"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="bg-lightgolden border-b   py-1  focus:outline-none w-full mt-8"
              placeholder="Contact Number"
            />
            <input
              type="text"
              className="bg-lightgolden border-b   py-1  focus:outline-none w-full mt-8"
              placeholder="E-mail ID"
            />
            <button className="bg-darkgreen text-white w-full py-1 mt-8">
              Submit
            </button>
          </form>
          <Image src={gif} alt="gif" className="w-full   rounded-2xl mt-8" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
