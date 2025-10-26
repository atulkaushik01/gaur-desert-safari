import { Helmet } from 'react-helmet';

const SEOHead = ({ 
  title = "Gaur Desert Safari - Best Desert Tours in Jaisalmer | Book Now",
  description = "Book best Gaur Desert Safari packages in Jaisalmer. Jeep safari, camel rides, dune bashing, sandboarding. 25+ years experience. Best price guarantee.",
  keywords = "gaur desert safari, desert safari, jaisalmer desert safari, camel safari, jeep safari, dune bashing, sandboarding, rajasthan desert tour",
  canonical = "https://gaurdesertsafari.com/",
  ogImage = "/images/og-image.jpg"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Gaur Desert Safari" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Gaur Desert Safari" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;