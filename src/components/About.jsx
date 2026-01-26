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
    <section ref={comp} className="py-10 md:py-16 bg-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column - Image Container */}
          <div className="about-left relative">
            {/* Red arch background frame */}
            <div className=" h-[480px] w-full relative overflow-hidden">
              {/* Profile image inside the arch */}
              <div className="absolute ">
                <div className="relative w-full h-full">
                  <img
                    src={heroImage}
                    alt="Oliver Scott"
                    className="w-full h-full object-cover "
                  />
                  
                  {/* Floating Badge - Top Left */}
                  <div className="absolute top-6 -left-2 bg- rounded-2xl shadow-lg p-4 w-36 z-10">
                    <div className="flex flex-col items-center">
                      <div className="bg-orange-50 p-2 rounded-full mb-2">
                        <Users className="w-5 h-5 text-[#FF451D]" />
                      </div>
                      <span className="text-xs text-gray-600">Total Customer</span>
                      <span className="text-xl font-bold text-gray-800">450+</span>
                    </div>
                  </div>

                  {/* Floating Badge - Bottom */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg px-5 py-2.5 flex items-center gap-2 z-10">
                    <Settings className="w-4 h-4 text-black" />
                    <span className="font-semibold text-gray-800 text-sm">Certified Product Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="about-right space-y-6">
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-1 bg-[#FF451D] rounded-full"></div>
                <span className="text-[#FF451D] font-semibold text-sm tracking-wider uppercase">About Me</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Who is <span className="text-[#FF451D]">Oliver Scott</span>?
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>

            {/* Stats Grid */}
            <div className="about-stats grid grid-cols-3 gap-4 py-4">
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">750+</div>
                <div className="text-gray-500 text-sm mt-1">Project Completed</div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">25+</div>
                <div className="text-gray-500 text-sm mt-1">Industry Covered</div>
              </div>
              <div className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">16+</div>
                <div className="text-gray-500 text-sm mt-1">Years of Experience</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-3">
                <div className="bg-[#FF451D] p-2 rounded-full">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Phone</div>
                  <div className="font-semibold text-gray-900 text-sm">(000) 000-0000</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-3">
                <div className="bg-[#FF451D] p-2 rounded-full">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div className="font-semibold text-gray-900 text-sm">example@gmail.com</div>
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