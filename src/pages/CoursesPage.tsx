 

import React, { useEffect, useState } from 'react';
import { Head } from '../components/SEO/Head';
import { ArrowRight, Bookmark } from 'lucide-react';
import { AdUnit } from '../components/AdUnit';

const cardData = [
  {
    title: "Web Development",
    imgSrc: "https://via.placeholder.com/300x200?text=Web+Development",
    text: "Learn web development with notes, important questions, previous years' questions, and recommended YouTube channels.",
    link: "#"
  },
  {
    title: "Android Development",
    imgSrc: "https://via.placeholder.com/300x200?text=Android+Development",
    text: "Access resources and tutorials to master Android development, from basics to advanced topics.",
    link: "#"
  },
   {
    title: "Data Science",
    imgSrc: "https://via.placeholder.com/300x200?text=Data+Science",
    text: "Explore free courses on Data Science, including topics like data analysis, machine learning, and more.",
    link: "#"
  },
  {
    title: "AI/ML",
    imgSrc: "https://via.placeholder.com/300x200?text=AI/ML",
    text: "Find comprehensive resources on Artificial Intelligence and Machine Learning, including notes and tutorials.",
    link: "#"
  },
  {
    title: "Prompt Engineering",
    imgSrc: "https://via.placeholder.com/300x200?text=Prompt+Engineering",
    text: "Learn about prompt engineering with curated resources and practical examples.",
    link: "#"
  },
  {
    title: "Cloud Computing",
    imgSrc: "https://via.placeholder.com/300x200?text=Cloud+Computing",
    text: "Access the latest syllabus and resources for Cloud Computing, including tutorials and study materials.",
    link: "#"
  },
  {
    title: "Ethical Hacking",
    imgSrc: "https://via.placeholder.com/300x200?text=Ethical+Hacking",
    text: "Discover resources and courses on Ethical Hacking to enhance your cybersecurity skills.",
    link: "#"
  },
  {
    title: "Cyber Security",
    imgSrc: "https://via.placeholder.com/300x200?text=Cyber+Security",
    text: "Learn about cyber security practices and protect your digital assets with our comprehensive courses.",
    link: "#"
  },
  {
    title: "Blockchain",
    imgSrc: "https://via.placeholder.com/300x200?text=Blockchain",
    text: "Understand blockchain technology and its applications in various industries with our in-depth courses.",
    link: "#"
  },
  {
    title: "Internet of Things (IoT)",
    imgSrc: "https://via.placeholder.com/300x200?text=IoT",
    text: "Explore the world of IoT and learn how to connect devices to create smart solutions.",
    link: "#"
  },
  {
    title: "Big Data",
    imgSrc: "https://via.placeholder.com/300x200?text=Big+Data",
    text: "Dive into big data analytics and learn how to handle and analyze large datasets effectively.",
    link: "#"
  },
  {
    title: "DevOps",
    imgSrc: "https://via.placeholder.com/300x200?text=DevOps",
    text: "Master DevOps practices to streamline your development and operations workflow.",
    link: "#"
  },
  {
    title: "Software Testing",
    imgSrc: "https://via.placeholder.com/300x200?text=Software+Testing",
    text: "Learn software testing techniques to ensure your applications are bug-free and high-quality.",
    link: "#"
  },
  {
    title: "Machine Learning",
    imgSrc: "https://via.placeholder.com/300x200?text=Machine+Learning",
    text: "Explore the fundamentals of machine learning and build intelligent systems.",
    link: "#"
  },
  {
    title: "Artificial Intelligence",
    imgSrc: "https://via.placeholder.com/300x200?text=Artificial+Intelligence",
    text: "Understand the principles of AI and how to apply them in real-world scenarios.",
    link: "#"
  }
  // Add the rest of the courses as provided in your code...
];

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

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 * index);
    });
  }, []);

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
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 py-12" id="courses">
        {/* Middle Ad */}
        <div className="mb-8">
          <AdUnit slot="9876543210" />
        </div>
        
        <div className="container flex flex-wrap gap-8 justify-center">
          {cardData.map((card, index) => (
            <React.Fragment key={index}>
              <div className="card bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-blue-500/20 border border-gray-700 transform translate-y-5 opacity-0 max-w-sm">
                <div className="w-full h-48 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <h2 className="text-white text-2xl font-bold text-center relative z-10 line-clamp-3">{card.title}</h2>
                  <button
                    className="absolute top-4 right-4 text-white bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-all duration-300"
                    onClick={() => handleSaveCourse(card.title)}
                  >
                    <Bookmark size={20} fill={savedCourses.includes(card.title) ? 'currentColor' : 'none'} />
                  </button>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-6 line-clamp-3">{card.text}</p>
                  
                  <a
                    href={card.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  >
                    <ArrowRight size={20} />
                    Enroll Now
                  </a>
                </div>
              </div>

              {/* Insert ad after every 6th card */}
              {(index + 1) % 6 === 0 && (
                <div className="w-full">
                  <AdUnit slot="5678901234" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Ad */}
        <div className="mt-12">
          <AdUnit slot="3579246801" format="horizontal" />
        </div>
      </div>
    </div>
  );
};