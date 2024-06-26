import Image from "next/image";
import loc1 from "../../../public/assets/loc-1.png";
import loc from "../../../public/assets/loc.png";
import map from "../../../public/assets/Route.jpg"


const Location = () => {
  return (
    <section className="mt-10 ">
      <div className=" relative   flex flex-col items-center mt-10 ">
        <h1 className="lg:text-4xl text-dark font-bold text-center">
        Strategically located in Narayankhed, the high-growth corridor        </h1>
        <Image src={map} alt="img" />
      </div>
    
      <div className="lg:flex mt-10 gap-5 mx-5">
        <div className="lg:w-1/2 md:flex md:justify-center ">
          <Image src={loc1} alt="loc" />
        </div>
        <div className="lg:w-1/2 md:flex md:justify-center md:mt-10 lg:mt-0 sm:mt-10">
          <Image
            src={loc}
            alt="loc"
            className="border border-green "
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
