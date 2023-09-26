import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="text-gray-300 bg-blue-900 body-font">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default App;
