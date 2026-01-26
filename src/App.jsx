import { useState } from 'react';
import Navbar from "./layout/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import FavoriteToolsSection from "./components/FavoriteToolsSection";
import About from "./components/About";
import Work from "./components/Work";
import Project from "./components/project";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";
import Testimonials from "./components/Testimonials";

// Removed unused logos array for clarity

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="bg-white min-h-screen font-sans selection:text-[#FF451D] selection:bg-[#000] overflow-x-hidden p-4">
        <Navbar />
        <Hero />
        <ServicesSection />
        <About />
        <FavoriteToolsSection />
        <Project />
        <Work />
        <Pricing />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}

export default App;
