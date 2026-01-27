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
    institution: 'OFPPT – Digital Development',
    degree: 'Specialized Technician in Digital Development',
    period: '2023 - Present'
  },
  {
    id: 2,
    institution: 'Self-Learning & Online Platforms',
    degree: 'Web Development, UI/UX Design & Product Design',
    period: '2021 - Present'
  },
  {
    id: 3,
    institution: 'High School',
    degree: 'Baccalaureate',
    period: '2019 - 2021'
  }
];
const workData = [
  {
    id: 1,
    company: 'Only Digital',
    role: 'Founder & Digital Developer',
    period: '2024 - Present'
  },
  {
    id: 2,
    company: 'Freelance',
    role: 'Web Developer ',
    period: '2022 - Present'
  },
  {
    id: 3,
    company: 'Personal Projects & Client Work',
    role: 'Frontend Developer',
    period: '2021 - 2022'
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

        
      </div>
    </section>
  );
};

export default Work;