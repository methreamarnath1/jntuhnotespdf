import React from 'react';
import { ArrowRight, Bookmark } from 'lucide-react';

// Define the props for the CourseCard component
interface CourseCardProps {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
  isSaved: boolean;
  onSave: () => void;
}

// CourseCard functional component to display individual course information
export const CourseCard: React.FC<CourseCardProps> = ({ title, description, link, imgSrc, isSaved, onSave }) => {
  return (
    <div className="card bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 border border-gray-700">
      <div className="w-full h-48 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <h2 className="text-white text-2xl font-bold text-center relative z-10 line-clamp-3">{title}</h2>
        <button
          className="absolute top-4 right-4 text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-all duration-300"
          onClick={onSave}
        >
          <Bookmark size={20} fill={isSaved ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="p-6">
        <p className="text-gray-300 text-sm mb-6 line-clamp-3">{description}</p>
        <a
          href={link}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
        >
          <ArrowRight size={20} />
          Enroll Now
        </a>
      </div>
    </div>
  );
};