import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <main className="text-gray-300 bg-blue-900 body-font">
      <About />
      <Projects />
      <Technologies />
    </main>
  );
};

export default App;
