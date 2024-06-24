// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../app/globals.css';
import { PageProvider } from '../app/pageContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
}

export default MyApp;
