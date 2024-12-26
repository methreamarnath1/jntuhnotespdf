import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const CourseCard: React.FC<CourseCardProps> = ({ title, description, icon }) => {
  return (
    <div className="card bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 border border-gray-700 transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      <p className="text-gray-300 mb-6">{description}</p>
      <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
};