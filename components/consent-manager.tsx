import type { ReactNode } from 'react';
import { gtag } from '@c15t/scripts/google-tag';
import {
  ConsentManagerDialog,
  ConsentManagerProvider,
  CookieBanner,
  type InitialDataPromise,
} from '@c15t/nextjs/pages';

/**
 * Consent management wrapper for Next.js Pages Router
 *
 * This component wraps your app with consent management functionality,
 * including the cookie banner, consent dialog, and provider.
 *
 * @param props - Component properties
 * @param props.children - Child components to render within the consent manager context
 * @param props.initialData - Initial consent data from server-side props (optional)
 *
 * @returns The consent manager provider with banner and dialog
 *
 * @remarks
 * To get initial server-side data on other pages, use:
 * ```tsx
 * import { withInitialC15TData } from '@c15t/nextjs/pages';
 *
 * export const getServerSideProps = withInitialC15TData('/api/c15t');
 * ```
 *
 * @example
 * ```tsx
 * // In your pages/_app.tsx
 * import { ConsentManager } from '../components/consent-manager';
 *
 * export default function MyApp({ Component, pageProps }) {
 *   return (
 *     <ConsentManager initialData={pageProps.initialC15TData}>
 *       <Component {...pageProps} />
 *     </ConsentManager>
 *   );
 * }
 * ```
 */
export function ConsentManager({
  children,
  initialData,
}: {
  children: ReactNode;
  initialData?: InitialDataPromise;
}) {
  return (
    <ConsentManagerProvider
      options={{
        mode: 'offline',
        consentCategories: ['necessary', 'marketing'], // Specify which consent categories to show
        scripts: [
          gtag({
            id: process.env.NEXT_PUBLIC_GA_KEY || 'G-34G47SDC87',
            category: 'marketing', // Use 'marketing' for ads or 'measurement' for analytics only
          }),
        ],
      }}
    >
      <CookieBanner />
      <ConsentManagerDialog />
      {children}
    </ConsentManagerProvider>
  );
}
