import React from 'react';
import ImageGallery from 'react-image-gallery';
import { portfolioItems } from './portfolioItems';

const Portfolio: React.FC = () => {
  return (
    <section className="section-portfolio" id="section-portfolio">
      <ImageGallery items={portfolioItems} lazyLoad={true} />
    </section>
  );
};
export default Portfolio;
