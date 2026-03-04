import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import UsesofUs from "./components/UsesofUs";
import Footer from "./components/Footer";
import ReachUs from "./components/ReachUs";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      offset: 100,
    });
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <UsesofUs />
      <ReachUs />
      <Footer />
    </div>
  );
}

export default App;