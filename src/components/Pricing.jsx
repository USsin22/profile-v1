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
      name: 'Essential',
      price: '$499',
      duration: '/ project',
      description: 'Perfect for small business websites and landing pages.',
      features: [
        { id: 1, text: 'Custom UI Design', enabled: true },
        { id: 2, text: 'Responsive Development', enabled: true },
        { id: 3, text: 'SEO Optimization', enabled: true },
        { id: 4, text: 'Social Media Integration', enabled: true },
        { id: 5, text: 'Basic Analytics', enabled: true },
        { id: 6, text: 'Email Support', enabled: true },
        { id: 7, text: 'E-commerce Functionality', enabled: false },
        { id: 8, text: 'Priority Support', enabled: false }
      ],
      recommended: false
    },
    {
      id: 2,
      name: 'Professional',
      price: '$1,299',
      duration: '/ project',
      description: 'Ideal for growing businesses needing advanced features.',
      features: [
        { id: 1, text: 'Custom UI Design', enabled: true },
        { id: 2, text: 'Responsive Development', enabled: true },
        { id: 3, text: 'SEO Optimization', enabled: true },
        { id: 4, text: 'Advanced API Integration', enabled: true },
        { id: 5, text: 'Custom Animations', enabled: true },
        { id: 6, text: 'E-commerce Setup', enabled: true },
        { id: 7, text: 'Performance Optimization', enabled: true },
        { id: 8, text: 'Priority Support', enabled: false }
      ],
      recommended: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: '$2,999',
      duration: '/ project',
      description: 'Full-scale solutions for complex digital ecosystems.',
      features: [
        { id: 1, text: 'Custom UI Design', enabled: true },
        { id: 2, text: 'Responsive Development', enabled: true },
        { id: 3, text: 'Full SEO Suite', enabled: true },
        { id: 4, text: 'Scalable Architecture', enabled: true },
        { id: 5, text: 'Complex Web Apps', enabled: true },
        { id: 6, text: 'Server-side Management', enabled: true },
        { id: 7, text: 'Security Audits', enabled: true },
        { id: 8, text: '24/7 Dedicated Support', enabled: true }
      ],
      recommended: false
    }
  ];

  return (
    <section ref={comp} className="bg-white py-16 sm:py-20 overflow-hidden text-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-xs font-semibold leading-7 text-orange-600 uppercase tracking-widest">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan for your <span className="text-orange-600">success</span>.
          </p>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-gray-600">
          Transparent pricing designed to scale with your business needs.
        </p>

        <div className="isolate mx-auto mt-12 grid max-w-md grid-cols-1 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1 ${plan.recommended
                ? 'bg-gray-900 text-white ring-2 ring-orange-500 shadow-xl'
                : 'bg-white text-gray-900 ring-1 ring-gray-200 hover:ring-orange-300 shadow-md'
                }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div>
                <div className="flex items-center justify-between gap-x-2">
                  <h3 className={`text-base font-semibold leading-7 ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                </div>
                <p className={`mt-2 text-xs leading-5 ${plan.recommended ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <p className="mt-4 flex items-baseline gap-x-1">
                  <span className={`text-3xl font-bold tracking-tight ${plan.recommended ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xs font-semibold leading-5 ${plan.recommended ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.duration}
                  </span>
                </p>
                <ul role="list" className={`mt-6 space-y-2 text-xs leading-5 ${plan.recommended ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.features.map((feature) => (
                    <li key={feature.id} className="flex gap-x-2">
                      <Check className={`h-4 w-4 flex-none ${feature.enabled ? (plan.recommended ? 'text-orange-400' : 'text-orange-600') : 'text-gray-300 opacity-50'}`} aria-hidden="true" />
                      <span className={feature.enabled ? '' : 'line-through opacity-50'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-6 block rounded-lg px-3 py-2.5 text-center text-xs font-bold leading-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all ${plan.recommended
                  ? 'bg-orange-600 text-white hover:bg-orange-500 focus-visible:outline-orange-600 shadow-md shadow-orange-500/20'
                  : 'bg-orange-50 text-orange-600 hover:bg-orange-100 ring-1 ring-inset ring-orange-200 focus-visible:outline-orange-500'
                  }`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>  
    </section >
  );
};

export default Pricing;