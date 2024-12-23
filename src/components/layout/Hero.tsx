import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-800 via-blue-900 to-gray-900 py-20 overflow-hidden">
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 bg-grid-gray/[0.1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-10" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center">
          {/* Icon with Floating Animation */}
          <div className="relative inline-block">
            <GraduationCap className="mx-auto h-20 w-20 text-blue-400 animate-float" />
            <div className="absolute -inset-1 bg-blue-500 blur-lg opacity-20 animate-pulse" />
          </div>

          {/* Heading */}
          <h2 className="mt-8 text-5xl font-extrabold text-white sm:text-6xl">
            <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 text-transparent bg-clip-text">
              Master Your Subjects
            </span>
            <span className="block mt-4 text-white text-4xl sm:text-5xl">
              with Premium Study Material
            </span>
          </h2>

          {/* Subheading */}
          <p className="mt-6 text-lg sm:text-xl text-gray-300">
            Access comprehensive notes for all JNTUH subjects
          </p>

          {/* Call to Action Button */}
          <div className="mt-10">
            <button className="relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 opacity-0 hover:opacity-100 transition-opacity" />
              <BookOpen size={22} className="relative z-10" />
              <span className="relative z-10 text-lg font-medium">
                Browse Notes
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
