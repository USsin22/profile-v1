import Navbar from "./layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main className="relative">
        <div className="fixed inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-pulse-slow"></div>
        </div>

        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="min-h-screen flex items-center py-20 relative z-10">
          <About />
        </section>

        <section id="skills" className="min-h-screen flex items-center py-20 relative z-10">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen flex items-center py-20 relative z-10">
          <Projects />
        </section>

        <section id="education" className="min-h-screen flex items-center py-20 relative z-10">
          <Education />
        </section>

        <section id="contact" className="min-h-screen flex items-center py-20 relative z-10">
          <Contact />
        </section>

        <footer className="py-8 text-center text-gray-500 text-sm relative z-10 border-t border-white/5 bg-dark/50 backdrop-blur-sm">
          <p>&copy; {new Date().getFullYear()} Yassin Benhadi. Built with React + Vite.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
