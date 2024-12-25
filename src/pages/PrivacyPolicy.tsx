import React from 'react';
import { Head } from '../components/SEO/Head';

export const PrivacyPolicy = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Head 
        title="Privacy Policy - JNTUH Notes PDF"
        description="Privacy policy for JNTUH Notes PDF - Learn how we protect your data and privacy"
      />
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-gray">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">We collect information that you provide directly to us when you:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Create an account</li>
            <li>Make a purchase</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us for support</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6">
            <li>Process your purchases</li>
            <li>Send you important updates</li>
            <li>Improve our services</li>
            <li>Respond to your requests</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
          <p>
            We use cookies and similar tracking technologies to track the activity on our service
            and hold certain information. Cookies are files with small amount of data which may
            include an anonymous unique identifier.
          </p>
        </section>
      </div>
    </article>
  );
};