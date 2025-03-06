import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Projects />
      <Contact />
    </>
  );
}
