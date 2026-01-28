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
      src: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg",
      alt: "Design System",
      title: "Design System",
      description: "A comprehensive UI kit built with Tailwind & React."
    },
    {
      src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
      alt: "Mobile App",
      title: "Fitness Tracker",
      description: "Mobile-first health coaching platform."
    },
    {
      src: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
      alt: "Web Platform",
      title: "SaaS Dashboard",
      description: "Real-time analytics with GSAP animations."
    },
    {
      src: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
      alt: "E-commerce",
      title: "Modern Shop",
      description: "Feature-rich e-commerce solution."
    },
    {
      src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      alt: "Landing Page",
      title: "Crypto Wall",
      description: "High-conversion landing page for crypto."
    },
    {
      src: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
      alt: "Dashboard",
      title: "Admin Portal",
      description: "Scalable data visualization interface."
    },
    {
      src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      alt: "Portfolio",
      title: "Creative Portfolio",
      description: "Clean and minimalist dev showcase."
    },
    {
      src: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg",
      alt: "Agency Site",
      title: "Digital Agency",
      description: "Immersive agency web experience."
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
    <section ref={comp} className="min-h-screen bg-[#0A0C10] py-20 lg:py-32 flex items-center overflow-hidden border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column: Content */}
          <div className="content-section lg:w-1/2 text-left space-y-8">
            <div>
              <span className="inline-block text-[#FF451D] font-mono text-xs tracking-[0.3em] font-bold uppercase mb-4 border-b-2 border-[#FF451D]/30 pb-1">
                UI BLOCKS & PROJECTS
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Beautiful <span className="text-gray-400">Experiences</span>, crafted with Precision.
              </h1>
            </div>

            {/* Tech Stack Icons (Matching Image style) */}
            <div className="flex items-center gap-8 py-4 border-y border-gray-800/50 overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth">
              <div className="flex flex-shrink-0 items-center gap-3 group">
                <FaJs className="w-6 h-6 text-[#F7DF1E] group-hover:scale-110 transition-transform" />
                <span className="text-white font-semibold text-sm">JS ES6</span>
              </div>
              <div className="flex flex-shrink-0 items-center gap-3 group">
                <FaReact className="w-6 h-6 text-[#61DAFB] group-hover:scale-110 transition-transform" />
                <span className="text-white font-semibold text-sm">React</span>
              </div>
              <div className="flex flex-shrink-0 items-center gap-3 group">
                <SiTailwindcss className="w-6 h-6 text-[#38BDF8] group-hover:scale-110 transition-transform" />
                <span className="text-white font-semibold text-sm">Tailwind</span>
              </div>
              <div className="flex flex-shrink-0 items-center gap-3 group">
                <SiGreensock className="w-6 h-6 text-[#88CE02] group-hover:scale-110 transition-transform" />
                <span className="text-white font-semibold text-sm">GSAP</span>
              </div>
            </div>

            <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
              Explore my collection of high-performance web applications,
              built with a focus on smooth interactions, clean code, and
              pixel-perfect designs.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <button className="flex items-center gap-3 bg-[#FF451D] hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:translate-y-[-2px] shadow-lg shadow-orange-900/20 active:translate-y-0">
                View Portfolio <FaChevronRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-3 border border-gray-700 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-full font-bold transition-all">
                <FaGithub className="w-5 h-5" /> Source Code
              </button>
            </div>
          </div>

          {/* Right Column: 3D Marquee (Matching Image style) */}
          <div className="marquee-section lg:w-1/2 w-full perspective-1000">
            <div className="relative transform rotate-y-[-10deg] rotate-x-[5deg]">
              <ThreeDMarquee
                images={projects}
                cols={3}
                speed={1.5}
                pauseOnHover={true}
                showOverlay={true}
                className="!bg-transparent !h-[500px] md:!h-[650px] !p-0 shadow-2xl"
              />

              {/* Decorative Glows (Matching image ambiance) */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF451D]/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Project;
