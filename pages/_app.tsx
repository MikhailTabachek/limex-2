// pages/_app.tsx
import type { AppProps } from 'next/app';
import { PageProvider } from '../app/pageContext'; // Ensure this path is correct
import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
}

export default MyApp;
