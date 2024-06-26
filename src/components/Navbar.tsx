import { Link } from "react-scroll";
// React icon imports
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const toggleMenu = () => {
    setNavMenu(!navMenu);
  };

  const handleMenuClick = () => {
    setNavMenu(false);
  };

  const scrollOffset = -80;
  const linkButton =
    "text-xl font-semibold w-1/2 text-center pt-2 cursor-pointer";

  return (
    <div className="fixed top-0 md:top-4 md:left-0 md:right-0 mx-auto w-full md:w-1/2 h-16 bg-green-950/35 backdrop-blur-md text-white z-[9999] md:rounded-full">
      <nav className="flex h-full w-full justify-center items-center px-4 lg:px-8">
        {/* <p className="text-4xl lg:text-5xl font-semibold tracking-wider ease-in duration-300">
          Freitag
        </p> */}
        <ul className="hidden md:flex gap-8 text-lg lg:text-xl  ease-in duration-300">
          <li className="hover:bg-white/20 px-2 py-1 rounded-full ease-in duration-200 cursor-pointer">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className=" hover:bg-white/20 px-2 py-1 rounded-full ease-in duration-200 cursor-pointer">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={scrollOffset}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className=" hover:bg-white/20 px-2 py-1 rounded-full ease-in duration-200 cursor-pointer">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={scrollOffset}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="hover:bg-white/20 px-2 py-1 rounded-full ease-in duration-200 cursor-pointer">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={scrollOffset}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* ------------------------------- Hamburger Menu -------------------------------------- */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="flex items-center">
            {navMenu ? <IoMdClose size={35} /> : <RxHamburgerMenu size={35} />}
          </button>

          <ul
            className={`${
              navMenu
                ? "fixed top-16 right-0 pt-12 min-h-screen h-full w-full flex flex-col items-center gap-8 divide-y-2 divide-gray-400 bg-green-950/85 backdrop-blur-md z-[99999] text-white ease-in-out duration-500"
                : "fixed top-[-300%]"
            }`}
          >
            <li className={linkButton}>
              <Link
                to="home"
                onClick={handleMenuClick}
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className={linkButton}>
              <Link
                to="about"
                onClick={handleMenuClick}
                spy={true}
                smooth={true}
                offset={scrollOffset}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className={linkButton}>
              <Link
                to="projects"
                onClick={handleMenuClick}
                spy={true}
                smooth={true}
                offset={scrollOffset}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className={linkButton}>
              <Link
                to="contact"
                onClick={handleMenuClick}
                spy={true}
                smooth={true}
                offset={scrollOffset}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
