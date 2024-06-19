import Image from "next/image";
import farm from "../../../public/assets/farm.png";

const Farmhouse = () => {
  return (
    <section className="bg-[url('/assets/farm.png')] bg-cover lg:h-[900px] rounded-3xl flex items-center px-10 py-10 mt-10">
      <div className=" lg:flex rounded-3xl  align-items-center bg-white  px-10 py-10 gap-10">
        <div className="lg:w-1/2 flex items-center  ">
          <Image src={farm} alt="farm" className="rounded-3xl " />
        </div>
        <div className="lg:w-1/2 md:mt-10 ">
          <h1 className="lg:text-2xl text-green font-bold tracking-wider md:2xl">
            Invest in the 100 acres of <br /> pure bliss at Kapil Farms
          </h1>
          <p className="text-[#BC9D3D] lg:text-lg tracking-wide mt-2">
            Start investing early for a bright financial future!
          </p>

          <p className="mt-8 lg:text-lg text-[#7D7D7D] text-justify tracking-wide">
            Narayankhed, Hyderabad, is a high-growth corridor known for its
            fertile soil and strong agricultural prospects. As a stable and
            secure investment, farmland here offers significant appreciation
            potential due to increasing demand for both agricultural and
            residential development. Make the wise decision to secure high
            returns on investment with Narayankhed’s promising land
            opportunities.
          </p>
          <p className="mt-5  text-[#7D7D7D] text-justify tracking-wide lg:text-lg">
            The earlier you begin investing, the more time you have to see your
            gains grow, build wealth, and secure a financial future. If you re
            searching for the ideal investment opportunity, look no
            further—invest in Mruganayani, an expansive 50-acre oasis of
            untouched beauty. Secure your investment today and pave the way for
            a prosperous tomorrow!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Farmhouse;
