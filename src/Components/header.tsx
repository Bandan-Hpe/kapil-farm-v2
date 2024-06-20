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
    <header className="flex justify-between items-center py-4 px-5">
      <Image src={logo} alt="logo" priority />
      <nav className="w-75">
        <ul className="lg:flex  gap-x-5  text-[16px] sm:hidden md:flex ">
          {navLink.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[15px] 
                 text-green"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
