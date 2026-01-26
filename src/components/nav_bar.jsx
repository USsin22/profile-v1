import React from 'react';
import { Menu, X, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'Blogs', href: '#' },
    { label: 'Testimonials', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          <span className="text-2xl font-bold text-gray-800">Oliver.</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
          
          {/* Contact Button */}
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <Mail size={18} />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t">
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="mx-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity mt-2">
              <Mail size={18} />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;