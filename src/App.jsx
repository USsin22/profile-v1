import Navbar from "./layout/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import CardSwap, { Card } from './components/CardSwap'
import BackgroundVideo from './assets/light-rays-1767881390810.webm'; // import video

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="relative">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          className="fixed inset-0 w-full h-full object-cover z-0"
        >
          <source src={BackgroundVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlay for better readability */}
        <div className="fixed inset-0 z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/40 pointer-events-none"></div>

        <section id="hero" className="relative z-20">
          <div style={{ height: '600px', position: 'relative' }}><Hero />
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <h3>Card 1</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3>Card 2</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3>Card 3</h3>
                <p>Your content here</p>
              </Card>
            </CardSwap>
          </div>
        </section>

        <section id="cards" className="relative z-20 py-20">
          
        </section>

        <section id="about" className="min-h-screen flex items-center py-20 relative z-20">
          <About />
        </section>

        <section id="skills" className="min-h-screen flex items-center py-20 relative z-20">
          <Skills />
        </section>

        <section id="projects" className="min-h-screen flex items-center py-20 relative z-20">
          <Projects />
        </section>

        <section id="education" className="min-h-screen flex items-center py-20 relative z-20">
          <Education />
        </section>

        <section id="contact" className="min-h-screen flex items-center py-20 relative z-20">
          <Contact />
        </section>

        <footer className="py-8 text-center text-gray-500 text-sm relative z-20 border-t border-white/5 bg-dark/50 backdrop-blur-sm">
          <p>&copy; {new Date().getFullYear()} Yassin Benhadi. Built with React + Vite.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
