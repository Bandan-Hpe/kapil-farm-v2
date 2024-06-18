import footer from "../../public/assets/footer.png"
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="mt-auto text-center text-zinc-400  py-5 px-7  text-xl">
      <Image src={footer} alt="footerimg"/>
      <section className="bg-[#0C352C] h-[300px]"></section>
    </footer>
  );
};

export default Footer;
