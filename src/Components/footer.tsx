import footer from "../../public/assets/footer.png";
import Image from "next/image";
import footerlogo from "../../public/assets/logo/white.png";
import Link from "next/link";
import fb from "./../../public/assets/icons/fb.png";
import insta from "./../../public/assets/icons/insta.png";
import ln from "./../../public/assets/icons/ln.png";
const Footer = () => {
  return (
    <footer className=" text-zinc-400 mt-10">
      <section className="bg-[#98c03d]  px-10 py-5">
        <div className="md:flex ">
          <div className="md:w-1/2">
            <Image src={footerlogo} alt="logo" />
            <p className="text-white w-96 mt-3">
              Kapil Farms presents an exceptional opportunity to experience
              tranquility away from the fast-paced urban environment.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col justify-end">
            <h1 className="text-3xl font-bold text-white tracking-wide ">
              Quick Links
            </h1>
            <ul className="flex  flex-col justify-between mt-5">
              <li>
                <Link href="#" className="text-white uppercase">
                  who are we
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white uppercase">
                  HIGHLIGHTS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white uppercase">
                  Farmland
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white uppercase">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white uppercase">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 flex  flex-col md:items-start sm:items-start sm:mt-5">
            <h1 className=" text-3xl font-bold text-white tracking-wide ">
              Subscribe Now
            </h1>
            <p className="text-white mt-2">
              Don’t miss our future updates. Subscribe right away.
            </p>
            <ul className="flex gap-5 mt-2">
              <li>
                <Link href="#">
                  <Image src={fb} alt="fb" className="w-10" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image src={insta} alt="insta" className="w-10" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image src={ln} alt="ln" className="w-10" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="md:flex  bg-[#000] justify-around items-center">
        <p className="text-white text2xl px-5 py-5">
          © 2024 Kapil Farms - All rights reserved.
        </p>
        <ul className="flex text-white gap-10">
          <li>Home</li>
          <li>Privacy Policy</li>
          <li>Terms & Condition</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
