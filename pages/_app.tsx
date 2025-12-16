import type { AppProps } from 'next/app';
import '../assets/sass/main.scss';
import 'react-image-gallery/styles/css/image-gallery.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
