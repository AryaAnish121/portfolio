import Navbar from "./_components/Navbar";
import Home from "./_components/Home";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Project from "./_components/Projects";

const Main = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Project />
      <About />
      <Contact />
    </>
  );
};

export default Main;
