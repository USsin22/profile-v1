import React, { useLayoutEffect, useRef } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const comp = useRef(null);
  
  const educationData = [
    {
      id: 1,
      institution: 'Harmony Institute',
      degree: 'Master in Visual Arts',
      period: '2018 - 2025'
    },
    {
      id: 2,
      institution: 'Aurora Academy',
      degree: 'Bachelor in Visual Arts',
      period: '2014 - 2016'
    },
    {
      id: 3,
      institution: 'Crystalbrook',
      degree: 'High School',
      period: '2012 - 2014'
    }
  ];

  const workData = [
    {
      id: 1,
      company: 'Insightlancer',
      role: 'Senior Product Designer',
      period: '2016 - 2018'
    },
    {
      id: 2,
      company: 'Self-Employed',
      role: 'Visual Artist',
      period: '2014 - 2016'
    },
    {
      id: 3,
      company: 'KG Graphics Studio',
      role: 'Web Designer',
      period: '2012 - 2014'
    }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".work-header-anim", {
        scrollTrigger: {
          trigger: ".work-header-anim",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Cards Animation
      gsap.from(".work-card-anim", {
        scrollTrigger: {
          trigger: ".work-cards-container",
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 work-header-anim">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-1 bg-[#FF451D] rounded-full"></div>
            <span className="text-[#FF451D] font-medium text-sm tracking-wide">
              EDUCATION & WORK
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            My{' '}
            <span className="text-[#FF451D] italic font-serif">Education</span>
            {' '}&{' '}
            <span className="text-[#FF451D] italic font-serif">Work Experience</span>
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 work-cards-container max-w-4xl mx-auto">
          
          {/* Education Card */}
          <div className="bg-white rounded-[2rem] border-l-4 border-[#FF451D] shadow-sm overflow-hidden work-card-anim max-w-md mx-auto w-full">
            {/* Card Header */}
            <div className="bg-gradient-to-br from-red-50 to-white p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#FF451D] rounded-full flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Education</h2>
              </div>
            </div>

            {/* Education List */}
            <div className="p-5 sm:p-6">
              <div className="space-y-6">
                {educationData.map((item) => (
                  <div key={item.id} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-base mb-1">
                          {item.institution}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.degree}</p>
                      </div>
                      <span className="bg-black text-white text-xs font-medium rounded-full px-3 py-1.5 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Work Experience Card */}
          <div className="bg-white rounded-[2rem] border-l-4 border-[#FF451D] shadow-sm overflow-hidden work-card-anim max-w-md mx-auto w-full">
            {/* Card Header */}
            <div className="bg-gradient-to-br from-red-50 to-white p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-[#FF451D] rounded-full flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-lg font-bold text-gray-900">Work Experience</h2>
              </div>
            </div>

            {/* Work List */}
            <div className="p-5 sm:p-6">
              <div className="space-y-6">
                {workData.map((item) => (
                  <div key={item.id} className="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-base mb-1">
                          {item.company}
                        </h3>
                        <p className="text-gray-600 text-sm">{item.role}</p>
                      </div>
                      <span className="bg-black text-white text-xs font-medium rounded-full px-3 py-1.5 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Optional Footer Note */}
        <div className="mt-8 text-center work-header-anim">
          <p className="text-gray-500 text-sm">
            Continuously learning and growing in the design field since 2012
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;