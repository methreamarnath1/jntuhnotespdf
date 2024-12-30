import React from 'react';
import { Helmet } from 'react-helmet-async';

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  author?: string;
}

export const Head: React.FC<HeadProps> = ({
  title = 'JNTUH Notes PDF',
  description = 'Access comprehensive notes for all JNTUH subjects',
  keywords = 'JNTUH, engineering notes, study materials',
  image = '/og-image.jpg',
  url = 'https://yourwebsite.com',
  author = 'Your Name'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="JNTUH Notes PDF" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@YourTwitterHandle" />
      <meta name="twitter:creator" content="@YourTwitterHandle" />
    </Helmet>
  );
};