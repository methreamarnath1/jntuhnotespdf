import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  path,
}) => {
  return (
    <Link
      to={path}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 border border-gray-700 group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="p-3 bg-indigo-500/10 rounded-full mb-4 group-hover:bg-indigo-600/10">
          <Icon className="h-8 w-8 text-blue-500 group-hover:text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 mb-2">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex items-center text-blue-400 group-hover:text-blue-500 transition-colors">
          <span className="mr-2">Learn More</span>
          <ArrowRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  );
};