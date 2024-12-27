import React from 'react';
import { CourseCard } from './CourseCard';
import { AdUnit } from '../AdUnit';
import { Course } from '../../types';

interface CourseGridProps {
  courses: Course[];
  savedCourses: string[];
  onSaveCourse: (title: string) => void;
}

export const CourseGrid: React.FC<CourseGridProps> = ({ 
  courses, 
  savedCourses,
  onSaveCourse 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <React.Fragment key={course.title}>
          <CourseCard
            title={course.title}
            description={course.text}
            link={course.link}
            imgSrc={course.imgSrc}
            isSaved={savedCourses.includes(course.title)}
            onSave={() => onSaveCourse(course.title)}
          />
          {/* Insert ad after every 6th card */}
          {(index + 1) % 6 === 0 && (
            <div className="col-span-full">
              <AdUnit slot="5678901234" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};