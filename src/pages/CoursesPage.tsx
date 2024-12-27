import React, { useState, useEffect } from 'react';
import { Head } from '../components/SEO/Head';
import { Check } from 'lucide-react';
import { CourseGrid } from '../components/courses/CourseGrid';
import { AdUnit } from '../components/AdUnit';
import { courseData } from '../data/courseData';

export const CoursesPage = () => {
  const [savedCourses, setSavedCourses] = useState<string[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCourses') || '[]');
    setSavedCourses(saved);
  }, []);

  const handleSaveCourse = (courseTitle: string) => {
    const saved = JSON.parse(localStorage.getItem('savedCourses') || '[]');
    if (saved.includes(courseTitle)) {
      const newSaved = saved.filter((title: string) => title !== courseTitle);
      localStorage.setItem('savedCourses', JSON.stringify(newSaved));
      setSavedCourses(newSaved);
    } else {
      const newSaved = [...saved, courseTitle];
      localStorage.setItem('savedCourses', JSON.stringify(newSaved));
      setSavedCourses(newSaved);
    }
  };

  return (
    <div className="bg-gray-900 text-white">
      <Head 
        title="Free Engineering Courses - JNTUH Notes PDF"
        description="Access free engineering courses and learning materials"
      />
      
      {/* Top Ad */}
      <AdUnit slot="1234567890" />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-800 via-blue-900 to-gray-900 py-20 overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid-gray/[0.1] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-10" />
        <h1 className="text-5xl font-bold mb-4 relative z-10">Free Courses</h1>
        <p className="text-xl mb-8 relative z-10">Empower Your Learning—Access Free Courses to Shape Your Future!</p>
        <a href="#courses" className="btn bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md flex items-center justify-center gap-2 relative z-10 inline-flex mx-auto">
          <Check size={20} />
          Explore Courses
        </a>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 py-12" id="courses">
        {/* Middle Ad */}
        <div className="mb-8">
          <AdUnit slot="9876543210" />
        </div>
        
        <CourseGrid 
          courses={courseData} 
          savedCourses={savedCourses}
          onSaveCourse={handleSaveCourse}
        />

        {/* Bottom Ad */}
        <div className="mt-12">
          <AdUnit slot="3579246801" format="horizontal" />
        </div>
      </div>
    </div>
  );
};