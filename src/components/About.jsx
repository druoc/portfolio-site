const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello there, I'm Dave
            <br />A full stack software developer from Leeds, West Yorkshire.
          </h1>
          <p className="mb-8 leading-relaxed">
            Initially self-taught, I am currently studying with the good folks
            at Northcoders. Available for work from February 2023 onwards.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/dave-ruocco-04162b260"
              className="inline-flex text-white bg-sky-900	border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Check Out My Work
            </a>
            <a
              href="https://www.github.com/druoc"
              className="ml-4 inline-flex text-white-400 bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              My Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
