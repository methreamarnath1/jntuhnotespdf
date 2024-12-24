import { Helmet } from 'react-helmet-async';

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export const Head: React.FC<HeadProps> = ({
  title = 'JNTUH Notes PDF',
  description = 'Access comprehensive notes for all JNTUH subjects',
  keywords = 'JNTUH, engineering notes, study materials',
  image = '/og-image.jpg'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};