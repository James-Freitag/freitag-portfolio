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
        <ul className="flex flex-1 flex-wrap gap-6 px-4 lg:px-12 justify-center items-center text-center">
          <li className=" text-white text-xl rounded-md font-semibold min-w-[320px] w-1/3 h-auto group">
            <div className="bg-neutral-600 rounded-md relative overflow-hidden">
              <img
                src={harryPotterSS}
                alt="Harry Potter App 1"
                className="rounded-md hover:opacity-75"
              />
              <div className="absolute h-full w-full bg-black/35 flex justify-center items-center -bottom-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link
                  target="_blank"
                  to="https://github.com/James-Freitag/unsplash-potter/blob/master/app/routes/_index.tsx"
                >
                  <button className="bg-black text-white px-5 py-2 rounded-md hover:scale-95 hover:bg-neutral-900 ease-in duration-200">
                    More Info
                  </button>
                </Link>
              </div>
            </div>
          </li>
          <li className="text-white text-xl rounded-md font-semibold min-w-[320px] w-1/3 h-auto group">
            <div className=" bg-neutral-600 rounded-md relative overflow-hidden">
              <img
                src={harryPotterAPI}
                alt="Harry Potter App 2"
                className="rounded-md hover:opacity-75"
              />
              <div className="absolute h-full w-full bg-black/35 flex justify-center items-center -bottom-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link
                  target="_blank"
                  to="https://github.com/James-Freitag/harrypotter-app/blob/master/app/routes/_index.tsx"
                >
                  <button className="bg-black text-white px-5 py-2 rounded-md hover:scale-95 hover:bg-neutral-900 ease-in duration-200">
                    More Info
                  </button>
                </Link>
              </div>
            </div>
          </li>
          <li className="text-white text-xl rounded-md font-semibold min-w-[320px] w-1/3 h-auto group">
            <div className=" bg-neutral-600 rounded-md relative overflow-hidden">
              <img
                src={functionalityProject}
                alt="Functionality Project"
                className="rounded-md hover:opacity-75"
              />
              <div className="absolute h-full w-full bg-black/35 flex justify-center items-center -bottom-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link
                  target="_blank"
                  to="https://github.com/James-Freitag/react-forms-test/tree/main/src/components"
                >
                  <button className="bg-black text-white px-5 py-2 rounded-md hover:scale-95 hover:bg-neutral-900 ease-in duration-200">
                    More Info
                  </button>
                </Link>
              </div>
            </div>
          </li>
          <li className="text-white text-xl rounded-md font-semibold min-w-[320px] w-1/3 h-auto group">
            <div className=" bg-neutral-600 rounded-md relative overflow-hidden">
              <img
                src={portfolioApp}
                alt="Portfolio App"
                className="rounded-md hover:opacity-75"
              />
              <div className="absolute h-full w-full bg-black/35 flex justify-center items-center -bottom-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link
                  target="_blank"
                  to="https://github.com/James-Freitag/freitag-portfolio/tree/main/src/components"
                >
                  <button className="bg-black text-white px-5 py-2 rounded-md hover:scale-95 hover:bg-neutral-900 ease-in duration-200">
                    More Info
                  </button>
                </Link>
              </div>
            </div>
          </li>
          <li className="text-white rounded-md text-xl font-semibold min-w-[320px] w-1/3 h-auto group">
            <div className=" bg-neutral-600 rounded-md relative overflow-hidden">
              <img
                src={reactRouterApp}
                alt="React Router App"
                className="rounded-md hover:opacity-75"
              />
              <div className="absolute h-full w-full bg-black/35 flex justify-center items-center -bottom-0 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Link
                  target="_blank"
                  to="https://github.com/James-Freitag/react-types/tree/main/src/components"
                >
                  <button className="bg-black text-white px-5 py-2 rounded-md hover:scale-95 hover:bg-neutral-900 ease-in duration-200">
                    More Info
                  </button>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
