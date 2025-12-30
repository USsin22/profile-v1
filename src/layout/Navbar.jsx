import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="hero" smooth={true} duration={500} className="text-2xl font-display font-bold text-white hover:text-primary transition-colors">
              Yassin<span className="text-primary">.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA & Socials */}
          <div className="hidden md:flex items-center gap-4">
             <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
             </a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
             </a>
             <Link to="contact" smooth={true} duration={500} className="bg-primary hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer">
                Let's Talk
             </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-5 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 cursor-pointer text-center border-b border-white/5 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex justify-center gap-6 pt-4">
                 <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                    <Github size={24} />
                 </a>
                 <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                    <Linkedin size={24} />
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
