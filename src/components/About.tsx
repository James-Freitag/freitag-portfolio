// React Icons
import { IoLogoJavascript } from "react-icons/io5";
import { MdOutlineCss, MdOutlineHtml } from "react-icons/md";
import { SiTailwindcss, SiRemix } from "react-icons/si";
import { FaReact, FaNode } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

const About = () => {
  const iconSize = 90;

  return (
    <div
      id="about"
      className=" w-full grid grid-cols-1 md:grid-cols-2 py-12 px-4"
    >
      <section className="px-2">
        <h2 className=" text-3xl text-center font-semibold underline">
          About Me
        </h2>
        <p className="max-w-[500px] mx-auto pt-8 indent-4 text-xl leading-9">
          Hello, I'm James Freitag. I am a passionate self taught front end web
          developer. I love problem solving and creating accessible, responsive
          designs. Strong communication & techincal skills are essential in a
          team to create the highest quality applications. I also believe no one
          is ever done learning or improving themselves in this field or in
          their lives.
          <span className="font-semibold text-2xl">
            {" "}
            Always be learning & Always be improving!
          </span>
        </p>
      </section>
      <section className=" px-2 pb-20">
        <p className="text-center text-3xl pt-8 md:pt-0 font-semibold underline">
          Proficiencies
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-4  gap-10 place-items-center md:gap-16 pt-8">
          <li>
            <IoLogoJavascript size={iconSize} color="yellow" />
          </li>
          <li>
            <BiLogoTypescript size={iconSize} color="blue" />
          </li>
          <li>
            <MdOutlineHtml size={iconSize} color="orange" />
          </li>
          <li>
            <MdOutlineCss size={iconSize} color="blue" />
          </li>
          <li>
            <SiTailwindcss size={iconSize} color="teal" />
          </li>
          <li>
            <FaReact size={iconSize} color="teal" />
          </li>
          <li>
            <SiRemix size={iconSize} />
          </li>
          <li>
            <TbBrandNextjs size={iconSize} />
          </li>
          <li>
            <FaNode size={iconSize} color="green" />
          </li>
        </ul>
      </section>
      <div className="md:row-start-2 md:col-span-full mx-auto border-y-2 border-gray-300 w-full py-8">
        <p className="text-center text-3xl font-semibold underline pb-8">
          Info
        </p>
        <ul className="flex flex-col gap-4 font-semibold text-xl text-center">
          <li>James Freitag</li>
          <li>847-476-9849</li>
          <li>Ingleside, Illinois</li>
          <li>jamesfreitag05@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
