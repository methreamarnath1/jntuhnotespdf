import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, Calculator, GraduationCap, BookOpenCheck, User,Bookmark } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: BookOpen },
    { name: 'JNTUH Notes', path: '/notes', icon: GraduationCap },
    { name: 'Free Courses', path: '/courses', icon: BookOpenCheck },
    { name: 'SGPA Calculator', path: '/calculator', icon: Calculator },
    { name: 'Saved', path: '/saved', icon: Bookmark }, // Link to Saved page
    { name: 'About Us', path: '/about', icon: User },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-blue-500" />
              <span className="text-white font-bold text-xl">JNTUH Notes PDF</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
              >
                <item.icon className="h-5 w-5 text-blue-500 group-hover:text-white transition-colors duration-300" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-blue-500 group-hover:text-white transition-colors duration-300" />
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};