import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="text-gray-300 bg-blue-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Technologies />
    </main>
  );
};

export default App;
