import { motion } from "framer-motion";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Only Digital",
      category: "Digital Marketing",
      description: "A modern digital marketing and web development agency website featuring smooth animations and a high-performance UI.",
      stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Service Platform",
      category: "Full Stack App",
      description: "Inspired by AlloPro, this platform connects clients with professionals. Features include user roles, messaging, rating system, and service management.",
      stack: ["React", "PHP", "MySQL", "Authentication"],
    },
    {
      title: "Admin Dashboard",
      category: "Management Tool",
      description: "Comprehensive dashboard for managing users, tracking statistics, and visualizing data with interactive charts.",
      stack: ["React", "Vite", "Recharts", "Data Grid"],
    },
    {
      title: "Medical Dashboard",
      category: "Healthcare SaaS",
      description: "Appointment management system for doctors including patient records, consultation tracking, and revenue revenue monitoring.",
      stack: ["React", "Tailwind", "Formik", "Yup"],
    },
  ];

  return (
    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-bold font-display mt-2">Featured Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
