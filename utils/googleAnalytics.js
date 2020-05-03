import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize(process.env.GA_KEY);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
