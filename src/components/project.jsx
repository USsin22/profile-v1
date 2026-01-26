import React, { useState, useLayoutEffect, useRef } from 'react';
import { ChevronRight, Flower2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const project = () => {
  gsap.registerPlugin(ScrollTrigger);
  const comp = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Recipe App',
      subtitle: 'Food Recipe Mobile App Solution',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      client: 'Ava Mitchell',
      duration: '4 Months',
      country: 'United States',
      images: [
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500',
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=500',
        'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w-500'
      ]
    },
    {
      id: 2,
      title: 'Ebook',
      subtitle: 'Ebook and Audio Book App UI',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
      client: 'Robert Fox',
      duration: '3 Months',
      country: 'United States',
      images: [
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500',
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=500'
      ]
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          start: "top 75%",
        }
      });

      tl.from(".project-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(".project-card", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4");
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="p-2 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="project-header flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-16">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-[#FF451D] rounded-full"></div>
              <span className="text-[#FF451D] font-semibold tracking-wider text-[16px]">MY PORTFOLIO</span>
            </div>
            
            <div className="flex items-center gap-3">
              <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Let's Have a{' '}
                <span className="text-[#FF451D] italic font-medium text-[26px]">Look at My Portfolio</span>
              </h1>
              {/* <Flower2 className="w-8 h-8 text-[#FF451D]" /> */}
            </div>
          </div>

          {/* View All Projects Button */}
          <button className="group relative flex items-center rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
            <div className="bg-[#FF451D] text-white px-6 py-3.5 font-semibold text-sm md:text-base transition-all duration-300 group-hover:pr-10">
              View All Projects
            </div>
            <div className="bg-black w-12 h-12 flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Project Cards */}
        <div className="space-y-8 h-[50%]">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex-row`}
            >
              
              {/* Image Grid Section */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="relative h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
                    <div className="relative w-full h-[400px] rounded-[2rem] shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                </div>
              </div>

              {/* Project Details Section */}
              <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-b from-gray-50 to-white">
                <div className="h-full flex flex-col justify-center">
                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {project.title} –{' '}
                    <span className="text-[#FF451D]">{project.subtitle}</span>
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Data Table */}
                  <div className="bg-white rounded-xl border border-gray-200 p-1 mb-8">
                    <div className="space-y-1">
                      {/* Client */}
                      <div className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <span className="text-gray-700 font-medium">Client</span>
                        <span className="text-gray-900 font-semibold">{project.client}</span>
                      </div>
                      
                      {/* Divider */}
                      <div className="h-px bg-gray-100 mx-4"></div>
                      
                      {/* Duration */}
                      <div className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <span className="text-gray-700 font-medium">Duration</span>
                        <span className="text-gray-900 font-semibold">{project.duration}</span>
                      </div>
                      
                      {/* Divider */}
                      <div className="h-px bg-gray-100 mx-4"></div>
                      
                      {/* Country */}
                      <div className="flex justify-between items-center p-4 hover:bg-gray-50 rounded-lg transition-colors">
                        <span className="text-gray-700 font-medium">Country</span>
                        <span className="text-gray-900 font-semibold">{project.country}</span>
                      </div>
                    </div>
                  </div>

                  {/* View Details Link */}
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-[#FF451D] font-semibold hover:text-orange-600 transition-colors group w-fit"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF451D] group-hover:w-full transition-all duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Load More Button */}
        <div className="mt-12 flex justify-center lg:hidden">
          <button className="group relative flex items-center rounded-full overflow-hidden shadow-lg">
            <div className="bg-[#FF451D] text-white px-6 py-3 font-semibold">
              Load More Projects
            </div>
            <div className="bg-black w-12 h-12 flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default project;