import Image from "next/image";
import loc1 from "../../../public/assets/loc-1.png";
import loc from "../../../public/assets/loc.png";

const Location = () => {
  return (
    <section className="mt-10">
      <div>
        <h1 className="text-green uppercase text-3xl font-bold text-center">
          Location
        </h1>
        <p className="text-[#BC9D3D] text-center text-lg">
          Strategically located in Narayankhed, the high-growth corridor
        </p>
      </div>
      <div className="flex mt-10">
        <div className="w-1/2">
          <Image src={loc1} alt="loc" />
        </div>
        <div className="w-1/2">
          <Image
            src={loc}
            alt="loc"
            className="border border-green rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
