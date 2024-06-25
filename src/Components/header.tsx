import Image from "next/image";
import logo from "../../public/assets/logo/color.png";
import Link from "next/link";

const navLink = [
  {
    href: "/",
    label: "WHO ARE WE",
  },
  {
    href: "/highlights",
    label: "HIGHLIGHTS",
  },
  {
    href: "/projects",
    label: "OUR PROJECTS",
  },
  {
    href: "/contact",
    label: "CONTACT US",
  },
];

const Header = () => {
  return (
    <header className="flex  items-center  h-[80px]">
      <div className="w-1/3">
        <Image src={logo} alt="logo" priority />
      </div>
      <div className="w-2/3 bg-[#98c03d] h-[100%] flex items-center">
        <nav className="w-full px-5">
          <ul className="lg:flex  justify-between  sm:hidden md:flex ">
            {navLink.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[18px] 
                 text-black font-bold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
