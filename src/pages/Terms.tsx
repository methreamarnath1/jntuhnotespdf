import React from 'react';
import { Head } from '../components/SEO/Head';

export const Terms = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Head 
        title="Terms of Service - JNTUH Notes PDF"
        description="Terms of service and usage guidelines for JNTUH Notes PDF"
      />
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      <div className="prose prose-gray">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Terms</h2>
          <p>
            By accessing JNTUH Notes PDF, you agree to be bound by these terms of service and
            comply with all applicable laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (notes)
            per purchase for personal, non-commercial transitory viewing only.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p>
            The materials on JNTUH Notes PDF are provided on an 'as is' basis. We make no
            warranties, expressed or implied, and hereby disclaim and negate all other warranties
            including, without limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of intellectual property.
          </p>
        </section>
      </div>
    </article>
  );
};