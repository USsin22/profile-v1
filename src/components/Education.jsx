import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const Education = () => {
  return (
    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
         <span className="text-primary font-semibold tracking-wider uppercase text-sm">Background</span>
         <h2 className="text-3xl md:text-4xl font-bold font-display mt-2">Education & Experience</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l border-white/10 space-y-12"
        >
          {/* Item 1 */}
          <div className="relative">
            <div className="absolute -left-[41px] top-0 bg-dark border border-white/10 p-2 rounded-full text-primary">
              <GraduationCap size={20} />
            </div>
            
            <div className="glass p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors">
              <span className="text-sm text-gray-400 block mb-2">2023 - Present</span>
              <h3 className="text-2xl font-bold text-white mb-2">Digital Development</h3>
              <h4 className="text-lg text-primary mb-4">OFPPT</h4>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <BookOpen size={18} className="mt-1 text-secondary shrink-0" />
                  <span>Mastering Full-stack development fundamentals (Frontend & Backend).</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Award size={18} className="mt-1 text-secondary shrink-0" />
                  <span>Building practical projects using React, Vite, and Laravel/PHP.</span>
                </li>
                 <li className="flex items-start gap-3 text-gray-300">
                  <Award size={18} className="mt-1 text-secondary shrink-0" />
                  <span>Preparing for regional and final exams (EFM / EFF) with focus on problem-solving.</span>
                </li>
              </ul>
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
