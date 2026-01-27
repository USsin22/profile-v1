import React, { useRef, useLayoutEffect } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Logo1 from "../assets/logo1.png"
import {
  SiReact, SiVite, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiPython, SiTypescript,
  SiJavascript, SiHtml5, SiCss3, SiDocker, SiGit, SiGithub, SiFigma, SiAdobexd,
  SiMongodb, SiPostgresql, SiFirebase, SiVercel, SiNetlify, SiLinux, SiRust, SiGo, SiSvelte
} from 'react-icons/si';
import './FavoriteToolsLoop.css';

const FavoriteToolsSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          start: "top 75%",
        }
      });

      tl.from(".tools-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
        .from(".icon", {
          scale: 0,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "back.out(1.7)"
        }, "-=0.4");
    }, comp);
    return () => ctx.revert();
  }, []);

  const icons = [
    { Icon: SiReact, color: "#61DAFB" },
    { Icon: SiVite, color: "#646CFF" },
    { Icon: SiNextdotjs, color: "#000000" },
    { Icon: SiTailwindcss, color: "#06B6D4" },
    { Icon: SiNodedotjs, color: "#339933" },
    { Icon: SiTypescript, color: "#3178C6" },
    { Icon: SiJavascript, color: "#F7DF1E" },
    { Icon: SiHtml5, color: "#E34F26" },
    { Icon: SiCss3, color: "#1572B6" },
    { Icon: SiPython, color: "#3776AB" },
    { Icon: SiDocker, color: "#2496ED" },
    { Icon: SiGit, color: "#F05032" },
    { Icon: SiGithub, color: "#181717" },
    { Icon: SiFigma, color: "#F24E1E" },
    { Icon: SiAdobexd, color: "#FF61F6" },
    { Icon: SiMongodb, color: "#47A248" },
    { Icon: SiPostgresql, color: "#4169E1" },
    { Icon: SiFirebase, color: "#FFCA28" },
    { Icon: SiVercel, color: "#000000" },
    { Icon: SiNetlify, color: "#00C7B7" },
    { Icon: SiLinux, color: "#FCC624" },
    { Icon: SiRust, color: "#000000" },
    { Icon: SiGo, color: "#00ADD8" },
    { Icon: SiSvelte, color: "#FF3E00" },
  ];

  return (
    <section ref={comp} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="tools-header mb-16 px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-[#FF451D] rounded-full"></div>
            <span className="text-[#000000] font-semibold tracking-wider text-sm">MY FAVORITE TOOLS</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Tools That{' '}
              <span className="text-[#FF451D]">Power My Work</span>
            </h1>
            <img src={Logo1} alt="submark" className='w-10 h-10' />
          </div>
        </div>

        {/* Tools Loop */}
        <div className="icons relative w-full flex items-center justify-center ">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

          <div className="icons-track  ">
            {/* Original Set */}
            {icons.map((item, index) => (
              <div key={`original-${index}`} className="icon flex items-center justify-center bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <item.Icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: item.color }} />
              </div>
            ))}

            {/* Duplicate Set for Loop */}
            {icons.map((item, index) => (
              <div key={`duplicate-${index}`} className="icon flex items-center justify-center bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <item.Icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: item.color }} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FavoriteToolsSection;