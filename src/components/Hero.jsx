import React, { useLayoutEffect, useRef } from "react";
import heroImage from "../assets/hero-image.png";
import user1 from "../assets/1.png";
import user2 from "../assets/2.png";
import user3 from "../assets/3.png";
import user4 from "../assets/4.png";
import logo from "../assets/Logo.png";
import logo1 from "../assets/Logo1.png";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Button from "../components/ui/btn-profile";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';
import CurvedLoop from "./CurvedLoop";
import CircularText from "./CircularText";


const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const comp = useRef(null);
  const skills = [
    { text: "Full-Stack Development", color: "bg-black text-white" },
    { text: "Landing Page", color: "bg-orange-500 text-white" },
    { text: "REST APIs", color: "bg-black text-white" },
    { text: "Authentication & Security", color: "bg-orange-500 text-white" },
    { text: "Responsive Web Apps", color: "bg-black text-white" },
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
        duration: 0.5,
        ease: "power3.out"
      })
        .from(".hero-left-content > *", {
          y: 20,
          opacity: 0,
          stagger: 0.2,
          duration: 1.5,
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
    <div ref={comp} className="min-h-screen bg-gray-100  flex flex-col py-5 justify-center items-center px-10  font-sans overflow-hidden ">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12 z-10 relative">

        {/* Center section with image (Order 1 on mobile, Order 2 on desktop) */}
        <div className="lg:order-2 lg:w-2/4 flex flex-col items-center order-1 w-full">
          {/* Heading */}
          <h1 className="hero-title text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 text-center mt-8 clip-path-inset">
            <span className="text-orange-500"> — </span> Hello There!<br />
            I'm <span className="text-orange-500 text-4xl md:text-3xl lg:text-4xl">Yassine Benhadi</span>
          </h1>
          <p className="hero-subtitle text-xl text-gray-600 mt-4 text-center">
            Full-Stack Developer
          </p>
          {/* Orange circle background */}
          <div className="hero-center-img relative w-72 h-72 md:w-96 md:h-96 mt-6">


            {/* Person image area */}
            <div className="relative w-full h-full">
              <img
                src={heroImage}
                alt="Hero"
                className="w-full h-full object-contain"
              />

              {/* Overlay button container */}
              <div className="absolute inset-0 flex items-start justify-center mt-[250px] md:mt-[330px] z-10">
                <Button />
              </div>

            </div>

          </div>




        </div>

        {/* Left side - Testimonial (Order 2 on mobile, Order 1 on desktop) */}
        <div className="lg:w-1/4 hero-left lg:order-1 order-2 w-full px-4 md:px-0">
          <div className="hero-left-content text-center lg:text-left">
            <div className="relative mb-6 inline-block lg:block">
              <span className="text-6xl text-orange-500 font-serif absolute -top-6 -left-2 hidden lg:block">"</span>
              <p className="text-xl font-medium text-gray-800 lg:pl-6 italic">
                Yassine Development Expertise Transformed Our Website — Highly Recommended
              </p>
            </div>
            <br />

            <div className="mt-8 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex -space-x-2">
                  {[user1, user2, user4].map((img, index) => (
                    <img key={index} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-300 border-2 border-white object-cover" src={img} alt={`User ${index + 1}`} />
                  ))}
                </div>
                <div>

                  <p className="text-gray-600"></p>
                </div>
              </div>
              <p className="text-lg font-semibold text-orange-500">5+ Reviews
                <span className="text-[#000] text-lg">(4.9 of 5)</span></p>
              <p className="text-gray-500 text-sm">Reviews from Valued Clients</p>
            </div>
          </div>
        </div>

        {/* Right side - Skills & Social (Order 3 on mobile, Order 3 on desktop) */}
        <div className="lg:w-1/4 lg:order-3 order-3 w-full px-4 md:px-0">

          {/* <CircularText text="HIRE ME✦HIRE ME✦" /> */}
          <br />
          {/* Skills tags */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-end mb-8">
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

          {/* <div className="relative flex flex-col items-center lg:items-end">
            <span className="text-gray-600 text-sm font-medium mb-2">Follow as on</span>
            <div className="flex gap-4 justify-center lg:justify-end">
              {socialIcons.map((socialIcon) => (
                <a
                  key={socialIcon.platform}
                  href={socialIcon.link}
                  className="hero-right-social w-10 h-10 rounded-full border border-[#000] flex items-center justify-center text-[#000] hover:bg-[#000] transition"
                >
                  {socialIcon.icon}
                </a>

              ))}

            </div>
          </div> */}

        </div>
      </div>
      <div className="absolute inset-0 z-0 mt-[100px]">
        <CurvedLoop marqueeText="Welcome to my portfolio ✦" />
      </div>
    </div>
  );
};

export default Hero;