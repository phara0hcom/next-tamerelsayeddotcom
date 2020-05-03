import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';
import Footer from '../components/Footer/Footer';

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
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
