import { projects } from "../data";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <ComputerDesktopIcon className="mx-auto inline-block w-10 mb-4" />

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below is a collection of some of the projects I've built during my
            time as a developer. Click on each to see the live project, or on
            the 'code' button to view the code repository on Github.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.id}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-sky-900 opacity-50 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <div className="flex justify-center">
                    <a
                      href={project.githubLink}
                      className="inline-flex text-white bg-sky-900 border-0 py-2 px-6 mt-4 focus:outline-none hover:bg-green-600 rounded text-lg w-30 h-10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
