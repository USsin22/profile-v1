import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypingText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

const About = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-left font-mono"
      >
        <span className="text-primary font-semibold tracking-wider uppercase text-sm">
          $ Introduction
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display mt-2 mb-8">
          <TypingText text="About Me" speed={80} />
        </h2>

        <div className="glass p-8 md:p-12 rounded-2xl shadow-xl border border-white/5 bg-white/5 backdrop-blur-sm relative overflow-hidden">
          {/* Decorative gradient blob */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="text-primary font-semibold">$</span>{" "}
            <TypingText
              text=" I am a First-year Digital Development student with a strong passion for building modern, scalable web applications."
              speed={20}
            />
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <span className="text-primary font-semibold">$</span>{" "}
            <TypingText
              text=" Specializing in React + Vite, I focus on crafting clean code and reusable components. I enjoy working on dashboards, authentication systems, and CRUD operations."
              speed={20}
            />
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
