import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Settings, Terminal, PenTool, GitBranch } from "lucide-react";

const Skills = () => {
  const skillsConfig = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-primary" />,
      skills: ["React (Hooks, Context)", "Vite", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion"],
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6 text-secondary" />,
      skills: ["PHP", "MySQL", "REST APIs", "SQL Queries", "Authentication"],
    },
    {
      title: "Concepts & Architecture",
      icon: <Settings className="w-6 h-6 text-accent" />,
      skills: ["CRUD Operations", "State Management", "Component Architecture", "Sessions & Cookies", "Responsive Design"],
    },
    {
      title: "Tools & Workflow",
      icon: <Terminal className="w-6 h-6 text-green-400" />,
      skills: ["Git & GitHub", "VS Code", "Figma", "Postman", "NPM / Yarn"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold tracking-wider uppercase text-sm">My Expertise</span>
        <h2 className="text-3xl md:text-4xl font-bold font-display mt-2">Skills & Technologies</h2>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillsConfig.map((category, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className="glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative z-10">
                <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                       {skill}
                    </li>
                  ))}
                </ul>
             </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
