const HeroSection = () => {
  return (
    <section className="bg-[url('/assets/Home-banner2.jpg')] bg-cover   lg:flex  h-screen bg-center">
      <div className="lg:w-2/3 lg:px-12 flex items-start">
        <h1 className="  text-white   px-10 lg:text-4xl xl:text-4xl   tracking-wider md:text-3xl sm:text-3xl py-10 ">
          Escape the city with your kids,
          <br />
          <span className="text-[#bc9d3d]">find home away from home at Mruganayani!</span>
        </h1>
      </div>
      <div className="lg:w-1/3 flex lg:items-start md:justify-center  relative sm:justify-center bg-[#000] ">
        <div className=" ">
          <div className="px-8 py-8">
            <p className="text-center text-[#bc9d3d] text-3xl py-10">
              Invest in Farmlands:
              <br /> Watch your wealth grow <br />
              with your children !
            </p>
            <p className="text-center font-bold">now is a great time !</p>
            <p className="text-white text-center font-bold text-3xl mt-5 ">
              contact us now !
            </p>
          </div>

          <form action="" className="mt-1 flex flex-col items-center p-8">
            <input
              type="text"
              className="bg-white border-b   p-2  focus:outline-none w-full mt-2"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="bg-white border-b   p-2   focus:outline-none w-full mt-8"
              placeholder="Contact Number"
            />
            <input
              type="text"
              className="bg-white border-b   p-2   focus:outline-none w-full mt-8"
              placeholder="E-mail ID"
            />
            <button className="bg-[#267139] text-white p-3 mt-8 lg:text-3xl rounded-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
