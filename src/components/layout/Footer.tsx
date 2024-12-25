import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={32} className="text-blue-400" />
              <h2 className="text-xl font-bold text-white">JNTUH Notes PDF</h2>
            </div>
            <p className="text-sm">
              Access comprehensive notes for all JNTUH subjects. Quality study materials for engineering courses.
            </p>
            <div className="flex mt-4 space-x-3">
              <Link to="#" className="text-gray-300 hover:text-blue-400">
                <Github size={24} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-blue-400">
                <Twitter size={24} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-blue-400">
                <Linkedin size={24} />
              </Link>
              <Link to="mailto:support@jntuhnotespdf.com" className="text-gray-300 hover:text-blue-400">
                <Mail size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-400">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-blue-400">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <address className="not-italic">
              <p>JNTUH Campus, Kukatpally</p>
              <p>Hyderabad, Telangana 500085</p>
              <p className="mt-2">Email: <a href="mailto:support@jntuhnotespdf.com" className="hover:text-blue-400">support@jntuhnotespdf.com</a></p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} JNTUH Notes PDF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};