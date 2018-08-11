import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';
import Footer from '../components/Footer/Footer';

import '../assets/sass/main.scss';

ReactGA.initialize('UA-46341330-2');
ReactGA.pageview(window.location.pathname + window.location.search);

export default class App extends Component {
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
