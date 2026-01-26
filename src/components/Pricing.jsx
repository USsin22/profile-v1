import { useLayoutEffect, useRef } from 'react';
import { Check, ChevronRight, ArrowRight, Flower2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const comp = useRef(null);
  
  const pricingPlans = [
    {
      id: 1,
      name: 'Hourly',
      price: '$80',
      duration: '/ Hour',
      total: '$80 / Hour',
      features: [
        { id: 1, text: 'Lorem ipsum dolor sit amet', enabled: true },
        { id: 2, text: 'Sed ut perspiciatis', enabled: true },
        { id: 3, text: 'At vero eos et accusamus', enabled: true },
        { id: 4, text: 'Vitae dicta sunt explicabo', enabled: true },
        { id: 5, text: 'Veritatis et quasi architecto', enabled: true },
        { id: 6, text: 'Beatae vitae dicta sunt', enabled: true },
        { id: 7, text: 'Explicabo. Nemo enim', enabled: false },
        { id: 8, text: 'Additional support feature', enabled: false }
      ]
    },
    {
      id: 2,
      name: 'Monthly',
      price: '$9600',
      duration: '/ Month',
      total: '$9600 / Month',
      features: [
        { id: 1, text: 'Lorem ipsum dolor sit amet', enabled: true },
        { id: 2, text: 'Sed ut perspiciatis', enabled: true },
        { id: 3, text: 'At vero eos et accusamus', enabled: true },
        { id: 4, text: 'Vitae dicta sunt explicabo', enabled: true },
        { id: 5, text: 'Veritatis et quasi architecto', enabled: true },
        { id: 6, text: 'Beatae vitae dicta sunt', enabled: true },
        { id: 7, text: 'Explicabo. Nemo enim', enabled: true },
        { id: 8, text: 'Additional support feature', enabled: false }
      ]
    },
    {
      id: 3,
      name: 'Quarterly',
      price: '$28,000',
      duration: '/ Qtr.',
      total: '$28,000 / Qtr.',
      features: [
        { id: 1, text: 'Lorem ipsum dolor sit amet', enabled: true },
        { id: 2, text: 'Sed ut perspiciatis', enabled: true },
        { id: 3, text: 'At vero eos et accusamus', enabled: true },
        { id: 4, text: 'Vitae dicta sunt explicabo', enabled: true },
        { id: 5, text: 'Veritatis et quasi architecto', enabled: true },
        { id: 6, text: 'Beatae vitae dicta sunt', enabled: true },
        { id: 7, text: 'Explicabo. Nemo enim', enabled: true },
        { id: 8, text: 'Additional support feature', enabled: true }
      ]
    }
  ];

  // SVG wave pattern for the header
  const wavePattern = `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 C20 0, 40 20, 60 10 S80 0, 100 10 L100 20 L0 20 Z' fill='%23ff5a32' opacity='0.2'/%3E%3C/svg%3E")`;

  
  return (
    <section ref={comp} className=" bg-gray-50 p-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 pricing-header-anim">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-[#FF451D] rounded-full"></div>
              <span className="text-[#FF451D] font-semibold tracking-wider text-sm">
                PRICING TABLE
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                My{' '}
                <span className="text-[#FF451D] italic">Pricing Model</span>
              </h1>
              <Flower2 className="w-7 h-7 text-[#FF451D]" />
            </div>
          </div>

          {/* Get Started Button */}
          <button className="group relative flex items-center rounded-full overflow-hidden shadow-lg transition-transform hover:scale-105">
            <div className="bg-[#FF451D] text-white px-6 py-3.5 font-semibold text-sm md:text-base transition-all duration-300 group-hover:pr-10">
              Get Started
            </div>
            <div className="bg-black w-12 h-12 flex items-center justify-center">
              <ChevronRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pricing-cards-container">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 pricing-card-anim max-w-sm mx-auto w-full"
            >
              {/* Orange Header Box with Wave Pattern */}
              <div 
                className="bg-[#FF451D] p-6 sm:p-8 relative overflow-hidden"
                style={{ backgroundImage: wavePattern, backgroundSize: '80% 10%' }}
              >
                {/* Top Row - Plan Name & Button */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white font-bold text-base">{plan.name}</h3>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4 text-[#FF451D]" />
                  </button>
                </div>

                {/* Bottom Row - Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/80 text-sm">{plan.duration}</span>
                </div>
                <div className="text-white/90 text-xs mt-1">{plan.total}</div>
              </div>

              {/* Feature List */}
              <div className="p-6 sm:p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <li 
                      key={feature.id}
                      className={`flex items-start gap-3 ${
                        feature.enabled ? 'text-gray-900' : 'text-gray-400'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        feature.enabled ? 'bg-[#FF451D]' : 'bg-gray-300'
                      }`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className={`text-sm ${feature.enabled ? '' : 'line-through'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Choose Plan Button */}
                <button className="w-full mt-8 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors text-sm">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center pricing-header-anim">
          <p className="text-gray-600">
            All plans include free consultation and project documentation
          </p>
          <button className="mt-4 inline-flex items-center gap-2 text-[#FF451D] font-semibold hover:text-orange-600 transition-colors group">
            Need a custom plan?
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;