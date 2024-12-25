import React from 'react';
import { Head } from '../components/SEO/Head';
import { Target, Eye, User, Mail, Users } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Head 
        title="About Us - JNTUH Notes PDF"
        description="Learn about our mission to provide quality engineering study materials"
      />
      <h1 className="text-4xl font-bold mb-8 text-white text-center">About Us</h1>
      <div className="prose prose-invert max-w-none">
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Target size={32} className="text-blue-400 mr-2" />
            <h2 className="text-3xl font-semibold text-white">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-300">
            At JNTUH Notes PDF, our mission is to provide high-quality study materials to engineering students. 
            We aim to make education more accessible and help students excel in their studies by offering comprehensive 
            resources for all subjects.
          </p>
        </section>
        
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Eye size={32} className="text-blue-400 mr-2" />
            <h2 className="text-3xl font-semibold text-white">Our Vision</h2>
          </div>
          <p className="text-lg text-gray-300">
            We envision a world where every student has the tools and resources they need to succeed academically. 
            By providing free and accessible study materials, we strive to support students in their educational journey 
            and contribute to their future success.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center mb-4">
            <User size={32} className="text-blue-400 mr-2" />
            <h2 className="text-3xl font-semibold text-white">Meet the Founder</h2>
          </div>
          <p className="text-lg text-gray-300">
            My name is Amar, and I am passionate about education and technology. 
            Having experienced the challenges of finding quality study materials during my own academic journey, 
            I founded JNTUH Notes PDF to help other students overcome these challenges. 
            I believe that every student deserves access to the best resources, regardless of their background or location.
          </p>
        </section>

        <section className="mb-12">
          <div className="flex items-center mb-4">
            <Mail size={32} className="text-blue-400 mr-2" />
            <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
          </div>
          <p className="text-lg text-gray-300">
            If you have any questions, suggestions, or feedback, please feel free to reach out to us at <a href="mailto:support@jntuhnotespdf.com" className="text-blue-400">support@jntuhnotespdf.com</a>. 
            We would love to hear from you and are always looking for ways to improve our services.
          </p>
        </section>

        <section>
          <div className="flex items-center mb-4">
            <Users size={32} className="text-blue-400 mr-2" />
            <h2 className="text-3xl font-semibold text-white">Join Us</h2>
          </div>
          <p className="text-lg text-gray-300">
            Are you passionate about education and want to make a difference? Join our team of volunteers and contribute to our mission of making education accessible for all. 
            Together, we can create a brighter future for students everywhere.
          </p>
        </section>
      </div>
    </div>
  );
};