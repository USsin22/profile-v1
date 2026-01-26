import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Flower2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sandra Blake',
    title: 'CEO, Digital Agency',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa'
  },
  {
    id: 2,
    name: 'Paula Reynolds',
    title: 'CEO, Flower Delivery App',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa'
  },
  {
    id: 3,
    name: 'Michael Chen',
    title: 'Founder, Tech Startup',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa'
  },
  {
    id: 4,
    name: 'Emily Watson',
    title: 'Marketing Director',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa'
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 h-full flex flex-col max-w-sm mx-auto w-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 flex-1">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold text-base text-gray-900">{testimonial.name}</h3>
            <p className="text-xs text-gray-600">{testimonial.title}</p>
          </div>
        </div>
        <div className="bg-white rounded-full p-2.5 shadow-sm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M10 8C10 10.21 8.21 12 6 12C5.45 12 4.94 11.87 4.5 11.65C4.82 14.5 7.07 16.72 9.93 16.95C10.19 16.98 10.37 17.23 10.34 17.49C10.31 17.75 10.06 17.93 9.8 17.9C6.46 17.63 3.75 15 3.07 11.5C3.02 11.17 3 10.84 3 10.5C3 7.46 5.46 5 8.5 5C9.38 5 10 5.62 10 6.5V8Z" fill="#FF451D"/>
            <path d="M21 8C21 10.21 19.21 12 17 12C16.45 12 15.94 11.87 15.5 11.65C15.82 14.5 18.07 16.72 20.93 16.95C21.19 16.98 21.37 17.23 21.34 17.49C21.31 17.75 21.06 17.93 20.8 17.9C17.46 17.63 14.75 15 14.07 11.5C14.02 11.17 14 10.84 14 10.5C14 7.46 16.46 5 19.5 5C20.38 5 21 5.62 21 6.5V8Z" fill="#FF451D"/>
          </svg>
        </div>
      </div>
      
      <div className="flex items-center gap-1.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="#FF451D">
            <path d="M10 1.5L12.5 7.5L19 8.5L14.5 13L15.5 19.5L10 16.5L4.5 19.5L5.5 13L1 8.5L7.5 7.5L10 1.5Z"/>
          </svg>
        ))}
        <span className="ml-2 font-semibold text-gray-900 text-sm">{testimonial.rating}</span>
      </div>
      
      <p className="text-gray-600 leading-relaxed text-sm flex-1">{testimonial.text}</p>
    </div>
  );
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const itemsPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="w-full bg-white p-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-[#FF451D]"></div>
            <span className="text-[#FF451D] text-sm font-medium tracking-wider">Client Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What My{' '}
            <span className="text-[#FF451D] italic">Clients Are Saying</span>
            <Flower2 className="inline-block ml-2 text-[#FF451D]" size={32} />
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="text-gray-600" size={24} />
          </button>

          <div className="overflow-hidden">
            <div
              className="grid md:grid-cols-2 gap-6 transition-all duration-500 ease-in-out"
              style={{
                opacity: isAnimating ? 0.5 : 1,
                transform: isAnimating ? 'scale(0.98)' : 'scale(1)'
              }}
            >
              {visibleTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            aria-label="Next testimonials"
          >
            <ChevronRight className="text-gray-600" size={24} />
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-12 bg-[#FF451D]'
                  : 'w-8 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-gray-600" size={20} />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-gray-600" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}