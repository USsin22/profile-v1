import React, { useState, useLayoutEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Item 02 expanded by default
  const [isHovered, setIsHovered] = useState(false);
  
  gsap.registerPlugin(ScrollTrigger);
  const comp = useRef(null);

  const services = [
    { id: 0, title: 'UI/UX Design' },
    { 
      id: 1, 
      title: 'Application Design',
      tags: ['Cross-Platform App Design', 'Progressive Web App', 'Wireframing and Prototyping', 'Custom App Theme Design'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    },
    { id: 2, title: 'Website Design' },
    { id: 3, title: 'UI Design' },
    { id: 4, title: 'Design System' }
  ];

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          start: "top 80%",
        }
      });

      tl.from(".service-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(".service-item", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4");
      
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl mx-auto">
        {/* <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Services I Provide</h1> */}
        <div className="service-header mb-12 md:mb-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-1 bg-[#FF451D] ro unded-full"></div>
                      <span className="text-[#000000] font-semibold tracking-wider text-sm">MY FAVORITE services</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Services {' '}
                        <span className="text-[#FF451D] size-2">I Provide</span>
                      </h1>
                      {/* <Star className="w-6 h-6 text-[#FF451D] fill-[#FF451D]" /> */}
                    </div>
        </div>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          {services.map((service, index) => (
            <div key={service.id} className="service-item overflow-hidden">
              {activeIndex === index ? (
                // Expanded State
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-black text-white rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-xl font-bold text-gray-400">0{index + 1}.</div>
                      <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
                    </div>
                    <button
                      onClick={() => handleAccordionClick(index)}
                      className="p-1.5 hover:bg-gray-800 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags?.map((tag, i) => (
                      <span 
                        key={i}
                        className="border border-zinc-700 px-3 py-1 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-8 max-w-2xl text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Image */}
                  <div className="mb-6">
                    <div className="bg-gray-800 rounded-xl overflow-hidden max-w-sm">
                      <div className="aspect-video bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center">
                        <div className="relative">
                          <div className="w-48 h-36 bg-gray-600 rounded-lg p-3">
                            {/* Mobile wireframe mockup */}
                            <div className="w-full h-full border-2 border-gray-500 rounded-lg p-1.5">
                              <div className="flex justify-between items-center mb-1.5">
                                <div className="w-12 h-2 bg-gray-500 rounded"></div>
                                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                              </div>
                              <div className="space-y-1.5">
                                <div className="w-full h-3 bg-gray-500 rounded"></div>
                                <div className="w-3/4 h-3 bg-gray-500 rounded"></div>
                                <div className="w-1/2 h-3 bg-gray-500 rounded"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                // Collapsed State
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white hover:bg-gray-100 rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-300"
                  onClick={() => handleAccordionClick(index)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="text-xl font-bold text-gray-400">0{index + 1}.</div>
                      <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                    </div>
                    <Plus className="w-5 h-5 text-gray-400" />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-12 flex justify-center">
          <button
            className="group relative flex items-center rounded-full overflow-hidden shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="bg-[#FF451D] text-white px-8 py-4 font-semibold transition-all duration-300 group-hover:pr-12">
              View All Services
            </div>
            <div className="bg-black w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:w-20">
              <motion.div
                animate={{ x: isHovered ? 2 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;