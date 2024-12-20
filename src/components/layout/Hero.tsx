import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <GraduationCap className="mx-auto h-16 w-16 text-blue-400 mb-4" />
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            <span className="block">Ace Your Exams with</span>
            <span className="block text-blue-400">Quality Study Material</span>
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Access comprehensive notes for all JNTUH subjects at affordable prices
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition-colors">
              <BookOpen size={20} />
              <span>Browse Notes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};