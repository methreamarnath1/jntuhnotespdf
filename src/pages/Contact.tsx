import React from 'react';
import { Head } from '../components/SEO/Head';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Head 
        title="Contact Us - JNTUH Notes PDF"
        description="Get in touch with JNTUH Notes PDF team for support and inquiries"
      />
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="text-blue-500" />
            <div>
              <h2 className="font-semibold mb-1">Email</h2>
              <p>support@jntuhnotespdf.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-blue-500" />
            <div>
              <h2 className="font-semibold mb-1">Phone</h2>
              <p>+91 1234567890</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-blue-500" />
            <div>
              <h2 className="font-semibold mb-1">Address</h2>
              <p>JNTUH Campus, Kukatpally</p>
              <p>Hyderabad, Telangana 500085</p>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};