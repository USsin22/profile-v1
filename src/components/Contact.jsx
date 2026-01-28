import React, { useState, useLayoutEffect, useRef } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope, FaAsterisk, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    budget: '',
    country: '',
    message: ''
  });

  gsap.registerPlugin(ScrollTrigger);
  const comp = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  // SVG wave pattern
  const wavePattern = `url("data:image/svg+xml,%3Csvg width='100' height='40' viewBox='0 0 100 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 Q25 20, 50 30 T100 30 L100 40 L0 40 Z' fill='%23ff451d'/%3E%3C/svg%3E")`;

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          start: "top 70%",
        }
      });

      tl.from(".contact-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
        .from(".contact-form", {
          x: -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.4")
        .from(".contact-info", {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.8");
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={comp} className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Centered */}
        <div className="contact-header text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-[#FF451D] rounded-full"></div>
            <span className="text-[#FF451D] font-semibold tracking-wider text-sm">
              CONTACT ME
            </span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Let's Talk for{' '}
              <span className="text-[#FF451D] italic">Your Next Projects</span>
            </h1>
            <FaAsterisk className="w-6 h-6 text-[#FF451D]" />
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left Side - Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-gray-900 font-semibold">
                    Your Name <span className="text-[#FF451D]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex. John Doe"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF451D] focus:border-transparent"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-gray-900 font-semibold">
                    Email <span className="text-[#FF451D]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF451D] focus:border-transparent"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="block text-gray-900 font-semibold">
                    Phone <span className="text-[#FF451D]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF451D] focus:border-transparent"
                    required
                  />
                </div>

                {/* Interest Dropdown */}
                <div className="space-y-2">
                  <label className="block text-gray-900 font-semibold">
                    I'm Interested in <span className="text-[#FF451D]">*</span>
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF451D] focus:border-transparent"
                    required
                  >
                    <option value="">Select</option>
                    <option value="web-design">Web Design</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="branding">Branding</option>
                  </select>
                </div>

                {/* Budget Dropdown */}
                <div className="space-y-2">
                  <label className="block text-gray-900 font-semibold">
                    Budget Range (USD) <span className="text-[#FF451D]">*</span>
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF451D] focus:border-transparent"
                    required
                  >
                    <option value="">Select Range</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-30k">$15,000 - $30,000</option>
                    <option value="30k+">$30,000+</option>
                  </select>
                </div>

                {/* Country Dropdown */}
                <div className="space-y-2">
                  <label className="block text-gray-900 font-semibold">
                    Country <span className="text-[#FF451D]">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF451D] focus:border-transparent"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                  </select>
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label className="block text-gray-900 font-semibold">
                  Your Message <span className="text-[#FF451D]">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Enter here.."
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF451D] focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="w-full bg-[#FF451D] text-white font-semibold py-4 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Info Card */}
          <div className="contact-info relative">
            <div className="bg-black text-white rounded-3xl overflow-hidden h-full">
              {/* Card Content */}
              <div className="p-8 lg:p-10 space-y-8">
                {/* Address Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FF451D] rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-[#FF451D] font-bold text-xl">Address</h3>
                  </div>
                  <p className="text-gray-300 pl-13">
                    123 Design Street<br />
                    Creative District<br />
                    San Francisco, CA 94107
                  </p>
                </div>

                {/* Contact Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FF451D] rounded-full flex items-center justify-center">
                      <FaPhoneAlt className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-[#FF451D] font-bold text-xl">Contact</h3>
                  </div>
                  <div className="space-y-2 pl-13">
                    <p className="text-gray-300 flex items-center gap-2">
                      <FaEnvelope className="w-4 h-4" />
                      hello@oliverscott.design
                    </p>
                    <p className="text-gray-300 flex items-center gap-2">
                      <FaPhoneAlt className="w-4 h-4" />
                      (555) 123-4567
                    </p>
                  </div>
                </div>

                {/* Time Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#FF451D] rounded-full flex items-center justify-center">
                      <FaClock className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-[#FF451D] font-bold text-xl">Time</h3>
                  </div>
                  <div className="pl-13">
                    <p className="text-gray-300 font-medium">Monday - Friday</p>
                    <p className="text-gray-400 text-sm">9:00 AM - 6:00 PM PST</p>
                    <p className="text-gray-300 font-medium mt-3">Weekends</p>
                    <p className="text-gray-400 text-sm">Available for urgent projects</p>
                  </div>
                </div>
              </div>

              {/* Footer - Stay Connected */}
              <div
                className="pt-10 pb-6 px-8 lg:px-10 relative overflow-hidden"
                style={{ backgroundImage: wavePattern, backgroundSize: '100% 100%', backgroundPosition: 'top' }}
              >
                <div className="relative z-10">
                  <h4 className="text-white font-bold text-lg mb-4">Stay Connected</h4>
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <FaFacebookF className="w-5 h-5 text-black" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <FaTwitter className="w-5 h-5 text-black" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <FaPinterestP className="w-5 h-5 text-black" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <FaInstagram className="w-5 h-5 text-black" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <FaYoutube className="w-5 h-5 text-black" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Typically respond within 2-4 hours during business days
          </p>
          <div className="mt-4 flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>✓ Free initial consultation</span>
            <span>✓ No spam, ever</span>
            <span>✓ Privacy guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;