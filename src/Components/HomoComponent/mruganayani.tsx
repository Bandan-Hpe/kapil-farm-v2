import Image from "next/image";
import mrugayan from "../.././../public/assets/mrugayan.png";
import icon1 from "../../../public/assets/m-ICON/Frame 16.png";
import icon2 from "../../../public/assets/m-ICON/Frame 17.png";
import icon3 from "../../../public/assets/m-ICON/Frame 18.png";
import icon4 from "../../../public/assets/m-ICON/Frame 19.png";
import icon5 from "../../../public/assets/m-ICON/Frame 20.png";

const Mruganayani = () => {
  return (
    <section className="mt-10 rounded-full shadow-2xl mx-w-75">
      <div className=" py-8 flex items-center  justify-around">
        <Image src={mrugayan} alt="mrugayan" />
        <div className="">
          <h1 className="text-green text-4xl font-bold text-center">
            Whats Sets <span className="text-[#7ABF4E]">Mruganayani</span> Apart?
          </h1>
          <p className="text-center text-[#BC9D3D]">
            Unparalleled access to farmland investments with
          </p>
          <div className="flex justify-around mt-8 gap-5">
            <div className="flex flex-col items-center">
              <Image src={icon1} alt="icon1" />
              <p className="text-black sm:text-md">100% Clear Time</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={icon2} alt="icon1" />
              <p className="text-black sm:text-md">Patta Passbook</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={icon3} alt="icon1" />
              <p className="text-black sm:text-md">Encroachment-Free</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={icon4} alt="icon1" />
              <p className="text-black sm:text-md">TS Rythu Bharosa</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={icon5} alt="icon1" />
              <p className="text-black sm:text-md">
                50 kg Farm Produce Annually
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mruganayani;
