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
    <div className="sticky top-0 w-full h-20 bg-neutral-900 text-white">
      <div className="flex h-full w-full justify-between items-center px-4 lg:px-8">
        <p className="text-4xl lg:text-6xl font-semibold tracking-wider ease-in duration-300">
          Freitag
        </p>
        <ul className="hidden md:flex gap-4 text-xl lg:text-2xl font-semibold ease-in duration-300">
          <li className="hover:text-neutral-800 hover:bg-white px-2 py-1 rounded-xl ease-in duration-200 cursor-pointer">
            <Link to="/" spy={true} smooth={true} offset={-90} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-neutral-800 hover:bg-white px-2 py-1 rounded-xl ease-in duration-200 cursor-pointer">
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
          <li className="hover:text-neutral-800 hover:bg-white px-2 py-1 rounded-xl ease-in duration-200 cursor-pointer">
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
          <li className="hover:text-neutral-800 hover:bg-white px-2 py-1 rounded-xl ease-in duration-200 cursor-pointer">
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
          <button onClick={toggleMenu}>
            {navMenu ? <IoMdClose size={35} /> : <RxHamburgerMenu size={35} />}
          </button>

          <ul
            className={`${
              navMenu
                ? "fixed top-20 right-0 pt-12 h-screen w-3/4 flex flex-col items-center gap-8 divide-y-2 divide-gray-400 bg-neutral-900 text-white ease-in-out duration-500"
                : "fixed top-[-100%]"
            }`}
          >
            <li className={linkButton}>
              <Link
                to="/"
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
      </div>
    </div>
  );
};

export default Navbar;
