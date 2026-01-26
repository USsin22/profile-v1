import React, { useLayoutEffect, useRef } from 'react';
import { Star, Figma, PenTool, Image, Film, BookOpen, Eye } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FavoriteToolsSection = () => {
  const tools = [
    { id: 1, name: 'Figma', percentage: '98%', icon: Figma, color: '#FF7262' },
    { id: 2, name: 'Sketch', percentage: '92%', icon: PenTool, color: '#FDA228' },
    { id: 3, name: 'Photoshop', percentage: '90%', icon: Image, color: '#31A8FF' },
    { id: 4, name: 'After Effects', percentage: '85%', icon: Film, color: '#9D9CFF' },
    { id: 5, name: 'Storybook', percentage: '90%', icon: BookOpen, color: '#FF4785' },
    { id: 6, name: 'InVision', percentage: '95%', icon: Eye, color: '#FF3366' },
  ];

  const marqueeItems = ['Website Design', 'Dashboard', 'Wireframe', 'User Research'];

  // Custom styles for leaf shape and marquee animation
  const leafShape = "rounded-tl-[100px] rounded-bl-[100px] rounded-br-[100px] rounded-tr-none";
  
  const marqueeAnimation = `
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }
    .animate-marquee {
      animation: marquee 50s linear infinite;
    }
  `;

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
      .from(".tools-item", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.4");
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{marqueeAnimation}</style>
      
      <section ref={comp} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="tools-header mb-12 md:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-[#FF451D] ro unded-full"></div>
              <span className="text-[#000000] font-semibold tracking-wider text-sm">MY FAVORITE TOOLS</span>
            </div>
            
            <div className="flex items-center gap-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Design Tools That{' '}
                <span className="text-[#FF451D] size-2">Power My Work</span>
              </h1>
              <Star className="w-6 h-6 text-[#FF451D] fill-[#FF451D]" />
            </div>
          </div>

          {/* Tools Grid */}
          <div className="mb-20">
            <div className="flex flex-wrap justify-center lg:justify-between gap-6 max-w-5xl mx-auto">
              {tools.map((tool) => (
                <div key={tool.id} className="tools-item relative group">
                  {/* Leaf-shaped card */}
                  <div className={`${leafShape} w-36 h-44 bg-zinc-100 flex flex-col items-center justify-center p-5 relative overflow-hidden group-hover:bg-zinc-200 transition-all duration-300`}>
                    {/* Circular icon container */}
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
                      <tool.icon className="w-8 h-8" style={{ color: tool.color }} />
                    </div>
                    
                    {/* Percentage */}
                    <div className="text-2xl font-bold text-gray-900 mb-2">{tool.percentage}</div>
                    
                    {/* Decorative dots */}
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF451D]/20"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF451D]/40"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF451D]/60"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF451D]/80"></div>
                    </div>
                  </div>
                  
                  {/* Tool name (outside card) */}
                  <div className="mt-3 text-center">
                    <span className="text-gray-600 font-medium text-sm">{tool.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Marquee Section */}
          <div className="relative overflow-hidden">
            {/* Full-width black bar */}
            <div className="bg-black py-6 md:py-8 rounded-2xl overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {/* Double the content for seamless looping */}
                {[...marqueeItems, ...marqueeItems].map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="inline-flex items-center mx-8">
                      <span className="text-white font-bold text-lg md:text-xl lg:text-2xl tracking-wide">
                        {item}
                      </span>
                    </div>
                    {index < marqueeItems.length * 2 - 1 && (
                      <div className="inline-flex items-center">
                        <Star className="w-5 h-5 text-[#FF451D] mx-4" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FavoriteToolsSection;