import ReactGA from 'react-ga4';

export const initGA = (): void => {
  if (process.env.GA_KEY) {
    ReactGA.initialize(process.env.GA_KEY);
  }
};

export const logPageView = (): void => {
  if (typeof window !== 'undefined') {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }
};
