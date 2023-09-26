import { tech } from "../tech";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/24/solid";

const Technologies = () => {
  return (
    <section id="technologies" className="min-h-screen">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CodeBracketIcon className="w-10 inline-block mb-4" />

          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>

          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I use the following technologies in my work.
          </p>
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {tech.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-sky-900 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />

                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
