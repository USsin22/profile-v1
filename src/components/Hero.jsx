import React, { useLayoutEffect, useRef } from "react";
import heroImage from "../assets/hero-image.png";
import user1 from "../assets/1.png";
import user2 from "../assets/2.png";
import user3 from "../assets/3.png";
import logo from "../assets/Logo.png";
import logo1 from "../assets/Logo1.png";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';


const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const comp = useRef(null);

  const skills = [
    { text: "Prototype", color: "bg-black text-white" },
    { text: "Dashboard", color: "bg-orange-500 text-white" },
    { text: "Mobile App Design", color: "bg-black text-white" },
    { text: "Design System", color: "bg-orange-500 text-white" },
    { text: "Website Design", color: "bg-black text-white" },
  ];
  const socialIcons = [
    { icon: <FaInstagram />, link: "https://www.instagram.com/" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/" },
    { icon: <FaTwitter />, link: "https://www.twitter.com/" },
    { icon: <FaGithub />, link: "https://www.github.com/" },
  ];

  const bottomItems = ["Website Design", "Dashboard", "Wireframe", "User Research"];

  useLayoutEffect(() => {
    const split = new SplitType('.hero-title', { types: 'chars' });

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Left Column Animation
      tl.from(".hero-left", { 
        x: -100, 
        opacity: 0, 
        duration: 1.5, 
        ease: "power3.out" 
      })
      .from(".hero-left-content > *", {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration:1.5,
        ease: "power2.out"
      }, "-=0.5");

      // Center Column Animation  
      tl.from(".hero-center-img", { 
        scale: 0.8, 
        opacity: 0, 
        duration: 1.5, 
        ease: "back.out(1.7)" 
      }, "-=0.8");
      
      // New Character Reveal Animation
      tl.from(split.chars, {
        yPercent: 100,
        stagger: {
          each: 0.05,
          from: "edges"
        },
        duration: 1,
        ease: "power3.out"
      }, "-=0.6");

      tl.from(".hero-subtitle", { 
        y: 20, 
        opacity: 0, 
        duration: 1.5, 
        ease: "power3.out" 
      }, "-=0.8");

      tl.from(".hero-btn", { 
        y: 20, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 2, 
        ease: "power2.out" 
      }, "-=0.6");

      // Right Column Animation
      tl.from(".hero-right-skill", { 
        x: 50, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power3.out" 
      }, "-=1");

      tl.from(".hero-right-social", { 
        x: 50, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power3.out" 
      }, "-=0.8");

      // Marquee Animation
      const marqueeTween = gsap.to(".marquee-content", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });

      const marqueeContainer = document.querySelector(".marquee-container");
      
      if (marqueeContainer) {
        marqueeContainer.addEventListener("mouseenter", () => {
          gsap.to(marqueeTween, { timeScale: 0.2, duration: 0.5 });
          gsap.to(".marquee-item", { scale: 1.1, color: "#FF451D", duration: 0.3 });
        });
        
        marqueeContainer.addEventListener("mouseleave", () => {
          gsap.to(marqueeTween, { timeScale: 1, duration: 0.5 });
          gsap.to(".marquee-item", { scale: 1, color: "#ffffff", duration: 0.3 });
        });
      }

    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4  font-sans overflow-hidden">
      {/* Main container */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 z-10 relative">
        
        {/* Left side - Testimonial */}
        <div className="lg:w-1/4 hero-left">
          <div className="hero-left-content">
            <div className="relative mb-6">
              <span className="text-6xl text-orange-500 font-serif absolute -top-6 -left-2">"</span>
              <p className="text-xl font-medium text-gray-800 pl-6 italic">
                Oliver's Remarkable Design Transformed Our Website — Highly Recommended!
              </p>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex -space-x-2">
                  {[user1, user2, user3].map((img, index) => (
                    <img key={index} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white object-cover" src={img} alt={`User ${index + 1}`} />
                  ))}
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">5+ Reviews</p>
                  <p className="text-gray-600">(4.9 of 5)</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">Reviews from Valued Clients</p>
            </div>
          </div>
        </div>

        {/* Center section with image */}
        <div className="lg:w-2/4 flex flex-col items-center">
         {/* Heading */}
          <h1 className="hero-title text-4xl lg:text-5xl font-bold text-gray-900 text-center mt-8 clip-path-inset">
            — Hello There!<br />
            I'm <span className="text-orange-500">Oliver Scott</span>
          </h1>
          <p className="hero-subtitle text-xl text-gray-600 mt-4">Product Designer based in USA</p>
          {/* Orange circle background */}
          <div className="hero-center-img relative w-96 h-96">
            {/* <div className="absolute inset-0 bg-orange-500 rounded-full opacity-10"></div> */}
            
            {/* Person image area */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={heroImage} alt="Hero" className="w-full h-full object-contain" />
            </div>
          </div>

         

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="hero-btn flex items-center gap-2 bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              Portfolio
              <span className="text-lg">→</span>
            </button>
            <button className="hero-btn flex items-center gap-2 border-2 border-gray-300 text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
              Hire Me
            </button>
          </div>
        </div>

        {/* Right side - Skills & Social */}
        <div className="lg:w-1/4">
          {/* Skills tags */}
          <div className="flex flex-wrap gap-3 justify-end mb-8">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`hero-right-skill ${skill.color} px-4 py-2 rounded-full text-sm font-medium`}
              >
                {skill.text}
              </span>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-4 justify-end">
            {socialIcons.map((socialIcon) => (
              <a
                key={socialIcon.platform}
                href={socialIcon.link}
                className="hero-right-social w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
              >
                {socialIcon.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[60px]"></div>

      {/* Bottom bar */}
      <div className=" bottom-10 left-0 w-full z-0 marquee-container -rotate-6 scale-110 origin-center bg-gray-900 py-6 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-content w-[200%]">
          {[...bottomItems, ...bottomItems, ...bottomItems, ...bottomItems].map((item, index) => (
            <div key={index} className="flex items-center gap-8 mx-4 marquee-item transition-colors">
              <span className="text-lg md:text-xl font-bold uppercase tracking-widest">{item}</span>
              <span className="text-orange-500 text-2xl"><img src={logo1} alt=""className="w-10 h-10" /></span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
};

export default Hero;