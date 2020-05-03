import React from 'react';
import Footer from '../components/Footer/Footer';

const Custom404 = () => {
  return (
    <>
      <section className="section-404">
        <div className="u-center-text u-margin-bottom-big">
          <h1 className="heading-primary--big">404</h1>
          <h3 className="heading-tertiary u-margin-bottom-small">Page is not found</h3>
          <a href="./" className="btn-text">
            &larr; Go back to Home
          </a>
        </div>
      </section>
      <Footer notMainPage />
    </>
  );
};

export default Custom404;
