import { Link } from "react-router-dom";
import harryPotterSS from "../assets/Screenshot 2024-03-01 2.44.38 PM.png";
import harryPotterAPI from "../assets/Screenshot 2024-03-01 2.48.13 PM.png";
import functionalityProject from "../assets/Screenshot 2024-03-01 2.51.02 PM.png";
import portfolioApp from "../assets/Screenshot 2024-03-01 2.52.35 PM.png";
import reactRouterApp from "../assets/Screenshot 2024-03-01 3.08.48 PM.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full pb-12">
      <p className="text-3xl font-semibold text-center underline pb-12">
        Projects
      </p>
      <div>
        <ul className="flex flex-1 flex-wrap gap-4 px-4 lg:px-12 justify-center items-center text-center">
          <li className=" text-white text-xl rounded-xl font-semibold min-w-[320px] w-1/3 h-auto">
            <div className="p-4 bg-neutral-600 rounded-xl ">
              <Link to="">
                <img
                  src={harryPotterSS}
                  alt="Harry Potter App 1"
                  className="rounded-xl hover:scale-95"
                />
              </Link>
            </div>
          </li>
          <li className="text-white text-xl rounded-xl font-semibold min-w-[320px] w-1/3 h-auto">
            <div className="p-4 bg-neutral-600 rounded-xl">
              <Link to="">
                <img
                  src={harryPotterAPI}
                  alt="Harry Potter App 2"
                  className="rounded-xl hover:scale-95"
                />
              </Link>
            </div>
          </li>
          <li className="text-white text-xl rounded-xl font-semibold min-w-[320px] w-1/3 h-auto">
            <div className="p-4 bg-neutral-600 rounded-xl">
              <Link to="">
                <img
                  src={functionalityProject}
                  alt="Functionality Project"
                  className="rounded-xl hover:scale-95"
                />
              </Link>
            </div>
          </li>
          <li className="text-white text-xl rounded-xl font-semibold min-w-[320px] w-1/3 h-auto">
            <div className="p-4 bg-neutral-600 rounded-xl">
              <img
                src={portfolioApp}
                alt="Portfolio App"
                className="rounded-xl hover:scale-95 hover:opacity-75"
              />
            </div>
          </li>
          <li className="text-white rounded-xl text-xl font-semibold min-w-[320px] w-1/3 h-auto">
            <div className="p-4 bg-neutral-600 rounded-xl">
              <img
                src={reactRouterApp}
                alt="React Router App"
                className="rounded-xl hover:scale-95"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
