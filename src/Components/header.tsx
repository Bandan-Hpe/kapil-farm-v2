"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/logo/color.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa";


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

  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle navbar state
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <header className="flex  items-center  h-[80px]">
      <div className="w-1/3">
        <Image src={logo} alt="logo" priority />
      </div>
      <div className="w-2/3 lg:bg-[#98c03d] h-[100%] flex items-center">
        <nav className="w-full px-5">

        <span
          className="lg:hidden md:block sm:block px-5 text-2xl text-[#98c03d] cursor-pointer float-end"
          onClick={toggleNav}
        >
          <FaBars />
        </span>
          <ul className={`lg:flex justify-between  lg:relative sm:left-0  sm:bg-[#98c03d] sm:z-50 md:w-42 sm:w-full absolute sm:mt-12 md:mt-12 lg:mt-0 ${
            isNavOpen ? "block" : "hidden"
          }`} >
            {navLink.map((link) => (
              <li key={link.href} className="sm:text-center sm:m-3 lg:m-0 ">
                <Link
                  href={link.href}
                  className="lg:text-[18px] 
                 text-black  "
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
