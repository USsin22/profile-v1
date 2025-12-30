import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full"
    >
      <div className="relative h-48 bg-dark/50 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500">
       
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        </div>
        
        
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80"></div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-xs text-gray-400 uppercase tracking-wider">{project.category}</p>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <p className="text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech, idx) => (
             <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-200">
               {tech}
             </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <button className="flex-1 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer">
             <ExternalLink size={16} /> Demo
          </button>
           <button className="px-3 py-2 rounded-lg bg-transparent border border-white/10 hover:bg-white/10 text-white transition-colors cursor-pointer">
             <Github size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
