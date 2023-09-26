import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-800 md:sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="title-font font-medium text-white mb-4 md:mb-0 ml-3 text-xl"
        >
          Dave Ruocco
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link to="/projects" className="mr-5 hover:text-white">
            My Portfolio
          </Link>
          <Link to="/technologies" className="mr-5 hover:text-white">
            Skills
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
