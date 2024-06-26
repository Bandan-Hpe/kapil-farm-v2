import Image from "next/image";
import family from "../../../public/assets/family.jpg";
import whyChoose from "../../../public/assets/why-choose.png";
import kapil from "../../../public/assets/Kapil-group.png";

const About = () => {
  return (
    <>
      <div className=" lg:flex items-center">
        <div
          className=" lg:w-1/2 relative bg-cover bg-center lg:h-screen flex items-center lg:px-10 py-10 "
          style={{ backgroundImage: "url('/assets/resort.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#0b0e0ceb] opacity-60"></div>
          <div className="my-10 relative z-10">
            <h1 className="text-[#e3bb3d] lg:text-2xl font-bold sm:text-center sm:text-xl md:text-xl">
              Invest in Mruganayani and <br /> reap rewards that are more <br />
              valuable than money!
            </h1>
            <h1 className="text-white lg:text-xl mt-5 text-justify">
              Give your kids a break from the concrete jungle and the relentless
              pace of city life. Let them enjoy the chirping of birds and the
              gentle breeze in their hair instead of the honking horns and city
              noise. Introduce them to Mruganayani and watch them bask in the
              purity of nature!
            </h1>
            <h1 className="text-white lg:text-2xl mt-5 text-justify">
              Here, the crunch of city life fades away, and the gentle rustle of
              leaves and fluttering of butterflies become your new companions.
            </h1>
            <div className="flex justify-center">
            <button className="mt-5 text-white font-3xl bg-green px-10 py-5 rounded-full ">
              BOOK NOW
            </button>
            </div>
         
          </div>
        </div>
        <div className="lg:w-1/2 lg:h-screen">
          <Image src={family} alt="family" className="lg:h-screen" />
        </div>
      </div>
      <div
        className=" relative bg-cover bg-center  flex flex-col items-center mt-10 "
        style={{ backgroundImage: "url('/assets/bg.jpg')" }}
      >
        <h1 className="lg:text-4xl text-dark font-bold">
          Why Choose Mruganayani by Kapil Farms?
        </h1>
        <Image src={whyChoose} alt="img" />
      </div>
      <div className="lg:flex justify-center items-center ">
        <div className="lg:w-1/3">
          <Image src={kapil} alt="logo img " />
        </div>
        <div className="lg:w-2/3">
          <h1 className="text-center  text-3xl font-bold mt-3">Who we are ?</h1>
          <p className="text-black text-lg py-5 text-justify">
            Kapil Group started its journey with chit funds in 1981 and ventured
            into real estate in 1982. Since then, it has expanded into 25
            diverse verticals and consistently broadened its horizons year after
            year, establishing itself as one of the most prestigious business
            conglomerates in India.
          </p>
          <p className="text-lg  text-justify">
            With Mruganayani, Kapil Group presents the opportunity to be closer
            to nature. These expansive acres offer a serene escape from the
            everyday urban rush. Our property provides a unique blend of farming
            and vacationing—whether you want to foster farming or spend a few
            days amid the charm of nature with your kids, Mruganayani is your
            ideal location. Experience the luxury of nature in a way only
            Mruganayani can offer. Be Rooted, Be Mruganayani!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
