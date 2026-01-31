import React, { useLayoutEffect, useRef } from 'react';
import { FaChevronRight, FaReact, FaJs, FaLayerGroup, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiGreensock } from 'react-icons/si';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeDMarquee } from "./ThreeDMarquee";

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);
  const comp = useRef(null);
const projects = [
  {
    src: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    alt: "Enterprise Dashboard",
    title: "Visionary Analytics",
    description: "Advanced data visualization suite with real-time insights and predictive modeling."
  },
  {
    src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    alt: "E-commerce Platform",
    title: "Nexus Commerce",
    description: "Scalable headless commerce solution with integrated global payment gateways."
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    alt: "Mobile Banking App",
    title: "FinTech Secure",
    description: "Biometric-enabled banking application with AI-powered fraud detection and investment insights."
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    alt: "Healthcare Management System",
    title: "MediSync Pro",
    description: "Comprehensive EHR platform with telemedicine integration and patient portal."
  },
  {
    src: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    alt: "AI Learning Platform",
    title: "EduAI Tutor",
    description: "Adaptive learning platform using machine learning to personalize educational pathways."
  },
  {
    src: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f",
    alt: "Smart Home Control",
    title: "HomeSphere OS",
    description: "Unified IoT platform for seamless smart home automation and energy management."
  },
  {
    src: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    alt: "Digital Marketing Suite",
    title: "Campaign Nexus",
    description: "Omnichannel marketing automation with AI-driven campaign optimization."
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    alt: "Supply Chain Dashboard",
    title: "LogiTrack Pro",
    description: "End-to-end supply chain visibility with blockchain verification and predictive logistics."
  },
  {
    src: "https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg",
    alt: "VR Collaboration Tool",
    title: "Virtual Workspace",
    description: "Immersive virtual reality environment for remote team collaboration and 3D presentations."
  },
  {
    src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    alt: "Fitness Tracking Platform",
    title: "FitLife Sync",
    description: "Comprehensive fitness ecosystem with wearables integration and personalized coaching."
  },
  {
    src: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg",
    alt: "Social Media Analytics",
    title: "SocialPulse Insights",
    description: "Real-time social media monitoring with sentiment analysis and competitor benchmarking."
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    alt: "Project Management Dashboard",
    title: "AgileFlow Pro",
    description: "Enterprise project management with agile methodologies and resource optimization."
  }
];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".content-section > *", {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: comp.current,
          start: "top 70%",
        }
      });

      gsap.from(".marquee-section", {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: comp.current,
          start: "top 70%",
        }
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="bg-white py-12 lg:py-16 flex items-center overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column: Content */}
          <div className="content-section lg:w-1/2 text-left space-y-6">
            <div>
              <span className="inline-block text-orange-500 font-mono text-xs tracking-[0.3em] font-bold uppercase mb-4 border-b-2 border-orange-500/30 pb-1">
                FEATURED WORK & PROJECTS
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Digital <span className="text-orange-600">Innovations</span>, Built to Scale.
              </h1>
            </div>

            {/* Tech Stack Icons (Matching Image style) */}
            <div className="flex items-center gap-8 py-4 border-y border-gray-100 overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth">
              <div className="flex flex-shrink-0 items-center gap-3 group">
                <FaJs className="w-6 h-6 text-[#F7DF1E] group-hover:scale-110 transition-transform" />
                <span className="text-gray-800 font-semibold text-sm">JS ES6</span>
              </div>
              <div className="flex flex-shrink-0 items-center gap-3 group">
                <FaReact className="w-6 h-6 text-[#61DAFB] group-hover:scale-110 transition-transform" />
                <span className="text-gray-800 font-semibold text-sm">React</span>
              </div>
              <div className="flex flex-shrink-0 items-center gap-3 group">
                <SiTailwindcss className="w-6 h-6 text-[#38BDF8] group-hover:scale-110 transition-transform" />
                <span className="text-gray-800 font-semibold text-sm">Tailwind</span>
              </div>
              <div className="flex flex-shrink-0 items-center gap-3 group">
                <SiGreensock className="w-6 h-6 text-[#88CE02] group-hover:scale-110 transition-transform" />
                <span className="text-gray-800 font-semibold text-sm">GSAP</span>
              </div>
            </div>

            <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed">
              Explore a curated selection of high-impact digital solutions,
              engineered for performance, scalability, and seamless
              user experiences.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button className="flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:translate-y-[-2px] shadow-lg shadow-orange-500/20 active:translate-y-0">
                Explore All Projects <FaChevronRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-3 border border-gray-300 hover:border-gray-900 text-gray-600 hover:text-gray-900 px-8 py-4 rounded-full font-bold transition-all">
                <FaGithub className="w-5 h-5" /> Source Code
              </button>
            </div>
          </div>

          {/* Right Column: 3D Marquee (Matching Image style) */}
          <div className="marquee-section lg:w-1/2 w-full perspective-1000">
            <div className="relative transform rotate-y-[-10deg] rotate-x-[5deg]">
              <ThreeDMarquee
                images={projects}
                cols={4}
                speed={1.5}
                pauseOnHover={true}
                showOverlay={true}
                className="bg-[#000] !h-[400px] md:!h-[500px] !p-0 "
              />

              {/* Decorative Glows (Matching image ambiance) */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Project;
