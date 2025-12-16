import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../components/Footer/Footer'), {
  loading: () => <div>Loading...</div>,
});

const Custom404: React.FC = () => {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Tamer Elsayed</title>
      </Head>
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
