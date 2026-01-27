import React, { useLayoutEffect, useRef } from 'react';
import { Users, Phone, Mail, Settings } from 'lucide-react';
import heroImage from "../assets/hero-image.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          start: "top 70%",
        }
      });

      tl.from(".about-left", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
        .from(".about-right", {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.8")
        .from(".about-stats > div", {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.5");

    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="py-8 md:py-12 bg-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Column - Image Container */}
          <div className="about-left relative max-w-[500px] mx-auto lg:mx-0 w-full">
            {/* Red arch background frame */}
            <div className="h-[280px] md:h-[380px] w-full relative overflow-hiddenborder-b-0">
              {/* Profile image inside the arch */}
              <div className="absolute inset-0">
                <div className="relative w-full h-full">
                  <img
                    src={heroImage}
                    alt="Yassine Benhadi"
                    className="w-full h-full object-cover object-center translate-y-4 md:translate-y-6"
                  />

                  {/* Floating Badge - Top Left */}
                  <div className="absolute top-4 -left-2 md:top-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-3 w-28 md:w-32 z-10 border border-white/50">
                    <div className="flex flex-col items-center">
                      <div className="bg-orange-50 p-1.5 rounded-full mb-1">
                        <Users className="w-4 h-4 text-[#FF451D]" />
                      </div>
                      <span className="text-[10px] text-gray-600 text-center leading-tight">Total Customer</span>
                      <span className="text-lg md:text-xl font-bold text-gray-800">20+</span>
                    </div>
                  </div>

                  {/* Floating Badge - Bottom */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-2 z-10 whitespace-nowrap">
                    <Settings className="w-3.5 h-3.5 text-black" />
                    <span className="font-semibold text-gray-800 text-xs md:text-sm">Full-Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-right space-y-5 mt-2 lg:mt-0">
            {/* Header */}
            <div className="space-y-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="w-8 h-1 bg-[#FF451D] rounded-full"></div>
                <span className="text-[#FF451D] font-semibold text-xs tracking-wider uppercase">About Me</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Who is <span className="text-[#FF451D]">Yassine Benhadi</span>?
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed max-w-2xl text-center lg:text-left text-sm px-2 lg:px-0">
              I'm a full-stack developer with a passion for building innovative web applications. I specialize in creating seamless user experiences and delivering high-quality code. My goal is to help businesses transform their ideas into reality through technology.
            </p>

            {/* Stats Grid */}
            <div className="about-stats grid grid-cols-3 gap-2 md:gap-4 py-3 border-t border-gray-100 mt-2">
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">20+</div>
                <div className="text-gray-500 text-[10px] md:text-xs mt-0.5">Project Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">10+</div>
                <div className="text-gray-500 text-[10px] md:text-xs mt-0.5">Industry Covered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">3+</div>
                <div className="text-gray-500 text-[10px] md:text-xs mt-0.5">Years of Experience</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row gap-3 pt-2 items-center lg:items-start w-full">
              <div className="flex items-center gap-3 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-full px-4 py-2.5 w-full md:w-auto justify-center md:justify-start">
                <div className="bg-[#FF451D]/10 p-1.5 rounded-full">
                  <Phone className="w-3.5 h-3.5 text-[#FF451D]" />
                </div>
                <div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-wide">Phone <span className='text-gray-400'>(+212) </span></div>
                  <div className="font-semibold text-gray-900 text-xs md:text-sm">656-620-205</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow rounded-full px-4 py-2.5 w-full md:w-auto justify-center md:justify-start">
                <div className="bg-[#FF451D]/10 p-1.5 rounded-full">
                  <Mail className="w-3.5 h-3.5 text-[#FF451D]" />
                </div>
                <div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-wide">Email</div>
                  <div className="font-semibold text-gray-900 text-xs md:text-sm">yassinbehadi2005@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;