

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-scroll";
import Animation from "./Animtion";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative z-10 overflow-hidden pt-20">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6 backdrop-blur-sm">
            <span className="text-primary font-medium tracking-wide text-sm">Digital Development Student</span>
          </div>
          
            <div className="text-center lg:text-left">
      <h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight mb-6">
        Hello, I’m{" "}
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Yassin
        </motion.span>
      </h1>

      <motion.p
        className="text-lg lg:text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        I create thoughtful and modern web experiences, focusing on clean design, performance, and meaningful solutions.
      </motion.p>
    </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="projects" smooth={true} duration={500}>
              <button className="px-8 py-3.5 rounded-full bg-primary hover:bg-blue-600 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25 cursor-pointer">
                View Projects 
                <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="px-8 py-3.5 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium flex items-center justify-center gap-2 transition-all backdrop-blur-sm cursor-pointer">
                Contact Me 
                <Mail size={20} />
              </button>
            </Link>
          </div>
        </motion.div>

       
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
           
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse delay-700"></div>
            
{/*        
            <div className="w-full h-full rounded-full border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden relative z-10 flex items-center justify-center">
             <Animation />
            </div> */}

           
            {/* <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-4 top-10 bg-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl z-20"
            >
              <span className="font-bold text-2xl text-primary">React</span>
            </motion.div>

             <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-4 bottom-20 bg-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl z-20"
            >
              <span className="font-bold text-2xl text-secondary">Vite</span>
            </motion.div> */}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
