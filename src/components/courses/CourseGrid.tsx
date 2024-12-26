import React from 'react';
import { CourseCard } from './CourseCard';
import { AdUnit } from '../AdUnit';

interface Course {
  title: string;
  imgSrc: string;
  text: string;
  link: string;
}

interface CourseGridProps {
  courses: Course[];
}

export const CourseGrid: React.FC<CourseGridProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <React.Fragment key={index}>
          <CourseCard
            title={course.title}
            description={course.text}
            link={course.link}
            imgSrc={course.imgSrc}
          />
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