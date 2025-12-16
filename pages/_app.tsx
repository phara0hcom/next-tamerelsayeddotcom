/**
 * Note: To get the initial server-side data on other pages, add this to each page:
 *
 * import { withInitialC15TData } from '@c15t/nextjs/pages';
 *
 * export const getServerSideProps = withInitialC15TData('https://your-instance.c15t.dev');
 *
 * This will automatically pass initialC15TData to pageProps.initialC15TData
 */

import type { AppProps } from 'next/app';
import '../assets/sass/main.scss';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ConsentManager } from "../components/consent-manager";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    		<ConsentManager initialData={pageProps.initialC15TData}>
    			<Component {...pageProps} />
    		</ConsentManager>
    	)
}
