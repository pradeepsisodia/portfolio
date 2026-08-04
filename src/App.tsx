import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Loader from "./components/Loader/Loader";
import VantaNetBackground from "./components/background/VantaNetBackground";
import AuroraBackground from "./components/background/AuroraBackground";
import Cursor from "./components/Cursor/Cursor";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";
import SEO from "./components/SEO/SEO";
import Hero from "./sections/Hero/hero";
import About from "./sections/About/about";
import Footer from "./sections/Footer/Footer";
import { ContactConfigProvider } from "./context/ContactConfigContext";

function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <ContactConfigProvider>
    <div className="relative min-h-screen text-white isolate">
      <VantaNetBackground />
      <SEO />
      <AuroraBackground />

      {!isMobile && <Cursor />}

      {loading ? (
        <Loader />
      ) : (
        <div className="relative z-[1]">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
    </ContactConfigProvider>
  );
}

export default App;
