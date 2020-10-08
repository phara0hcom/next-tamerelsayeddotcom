import React, { useEffect } from 'react';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';
import Footer from '../components/Footer/Footer';

import { initGA, logPageView } from '../utils/googleAnalytics';

const App = () => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </main>
    </div>
  );
};

export default App;
