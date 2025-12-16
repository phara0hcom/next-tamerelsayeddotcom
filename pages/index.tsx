import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import Header from '../components/Header/Header';

// Lazy load components below the fold
const About = dynamic(() => import('../components/About/About'), {
  loading: () => <div>Loading...</div>,
});
const Skills = dynamic(() => import('../components/Skills/Skills'), {
  loading: () => <div>Loading...</div>,
});
const Portfolio = dynamic(() => import('../components/Portfolio/Portfolio'), {
  loading: () => <div>Loading...</div>,
});
const Footer = dynamic(() => import('../components/Footer/Footer'), {
  loading: () => <div>Loading...</div>,
});

const App: React.FC = () => {
  return (
    <>
      <Head>
        <title>Tamer Elsayed - Web-Developer</title>
      </Head>
      <div>
        <Header />
        <main>
          <About />
          <Skills />
          <Portfolio />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
