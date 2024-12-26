import React from 'react';
import { BookOpen, GraduationCap, Calculator, Users, Bookmark } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { Head } from '../SEO/Head';

export const HomePage = () => {
  const features = [
    {
      title: 'JNTUH Notes',
      description: 'Access comprehensive study materials for all subjects',
      icon: BookOpen,
      path: '/notes'
    },
    {
      title: 'Free Courses',
      description: 'Learn from our collection of free educational courses',
      icon: GraduationCap,
      path: '/courses'
    },
    {
      title: 'SGPA Calculator',
      description: 'Calculate your SGPA and CGPA easily',
      icon: Calculator,
      path: '/calculator'
    },
    {
      title: 'Saved',
      description: 'View your saved notes and courses',
      icon: Bookmark,
      path: '/saved'
    },
    {
      title: 'About Us',
      description: 'Learn more about our mission and team',
      icon: Users,
      path: '/about'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      <Head 
        title="JNTUH Notes PDF - Engineering Study Materials"
        description="Access comprehensive notes for all JNTUH subjects. Download high-quality study materials for engineering courses."
      />

      {/* Hero Section */}
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
                with Quality Notes and Resources
              </span>
            </h2>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-gray-300">
              Unlock the full potential of your academic journey with our extensive study materials.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </main>
    </div>
  );
};