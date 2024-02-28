import { Link } from "react-router-dom";
// Icons Imports
import { FiArrowUpCircle } from "react-icons/fi";
import { GrLinkedin } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const iconSize = 40;
  const iconColor = "gray";
  return (
    <div className="flex flex-col justify-center items-center bg-neutral-950 h-48 w-full">
      <footer>
        <div className="flex justify-center items-center pb-4">
          <button onClick={scrollToTop} className="">
            <FiArrowUpCircle size={80} color="white" />
          </button>
        </div>
        <ul className="flex gap-4">
          <li>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/james-freitag-b758662a2/"
            >
              <GrLinkedin size={iconSize} color={iconColor} />
            </Link>
          </li>
          <li>
            <Link target="_blank" to="https://github.com/James-Freitag">
              <IoLogoGithub size={iconSize} color={iconColor} />
            </Link>
          </li>
          <li>
            <Link target="_blank" to="https://www.instagram.com/freitag05/">
              <FaInstagram size={iconSize} color={iconColor} />
            </Link>
          </li>
        </ul>
        <div className="text-gray-600 pt-4">&copy;JamesFreitag 2024</div>
      </footer>
    </div>
  );
};

export default Footer;
