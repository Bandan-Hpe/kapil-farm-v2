import Image from "next/image";
import icon1 from "../../../public/assets/Icon1.png";
import icon2 from "../../../public/assets/Icon2.png";
import icon3 from "../../../public/assets/Icon3.png";
import icon4 from "../../../public/assets/Icon4.png";
import icon5 from "../../../public/assets/Icon5.png";

const Mruganayani = () => {
  return (
    <section className="mt-5   mx-5">
      <h1 className="text-center text-4xl font-bold tracking-wide sm:text-xl">
        Why You Should Consider Farmland at Mruganayani
      </h1>
      <div className="lg:flex justify-around relative">
        <div className="h-5 w-full bg-[#dee0df] absolute top-24 sm:hidden md:hidden"></div>
        <div className="flex flex-col items-center text-center z-10">
          <Image src={icon1} alt="icon" width={200} height={200} />
          <h1 className="text-xl">
            100%
            <br />
            Clear Title
          </h1>
        </div>
        <div className="flex flex-col items-center text-center z-10">
          <Image src={icon2} alt="icon" width={200} height={200} />
          <h1 className="text-xl">
            Patta
            <br />
            Passbook
          </h1>
        </div>
        <div className="flex flex-col items-center text-center z-10">
          <Image src={icon3} alt="icon" width={200} height={200} />
          <h1 className="text-xl">
            Free from
            <br />
            Encroachment
          </h1>
        </div>
        <div className="flex flex-col items-center text-center z-10">
          <Image src={icon4} alt="icon" width={200} height={200} />
          <h1 className="text-xl">
            TS Rythu
            <br />
            Bharosa
          </h1>
        </div>
        <div className="flex flex-col items-center text-center z-10">
          <Image src={icon5} alt="icon" width={200} height={200} />
          <h1 className="text-xl">
            50kg of Farm
            <br />
            Produce Annually
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Mruganayani;
