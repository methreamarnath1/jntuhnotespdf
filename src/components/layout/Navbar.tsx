import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Calculator, GraduationCap, BookOpenCheck, User, Bookmark } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      if (nav && !nav.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/', icon: BookOpen },
    { name: 'JNTUH Notes', path: '/notes', icon: GraduationCap },
    { name: 'Free Courses', path: '/courses', icon: BookOpenCheck },
    { name: 'SGPA Calculator', path: '/calculator', icon: Calculator },
    { name: 'Saved', path: '/saved', icon: Bookmark },
    { name: 'About Us', path: '/about', icon: User },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />
              <span className="text-white font-bold text-lg sm:text-xl">JNTUH Notes PDF</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-y-0 right-0 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 bg-gray-800 transition-transform duration-300 ease-in-out h-screen z-50`}
      >
        <div className="px-2 pt-20 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-300 hover:text-white block px-3 py-4 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 text-blue-500" />
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};