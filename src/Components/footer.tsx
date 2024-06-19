import footer from "../../public/assets/footer.png";
import Image from "next/image";
import footerlogo from "../../public/assets/logo/white.png";
import Link from "next/link";
import fb from "./../../public/assets/icons/fb.png"
import insta from "./../../public/assets/icons/insta.png"
import ln from "./../../public/assets/icons/ln.png"
const Footer = () => {
  return (
    <footer className=" text-zinc-400  py-5 px-7  mt-10">
      <Image src={footer} alt="footerimg" />
      <section className="bg-[#0C352C] h-[300px] px-10">
        <div className="md:flex ">
          <div className="md:w-1/2">
            <Image src={footerlogo} alt="logo" />
            <p className="text-white w-96 mt-3">
              Kapil Farms presents an exceptional opportunity to experience
              tranquility away from the fast-paced urban environment.
            </p>
          </div>
          <div className="md:w-1/2 flex  flex-col items-end">
            <button className="bg-white text-green px-2 py-2 font-bold rounded-full">
              Subscribe Now
            </button>
            <p className="text-white mt-1">Don’t miss our future updates. Subscribe right away.</p>
            <ul className="flex gap-3 mt-1">
              <li><Link href="#"><Image src={fb} alt="fb"/></Link></li>
              <li><Link href="#"><Image src={insta} alt="insta"/></Link></li>
              <li><Link href="#"><Image src={ln} alt="ln"/></Link></li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
