import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';
import Footer from '../components/Footer/Footer';

export default class App extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
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
  }
}
