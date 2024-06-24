import type { AppProps } from 'next/app';
import '../app/globals.css'; // Ensure the path to your global CSS file is correct
import { PageProvider } from '../app/pageContext'; // Ensure the path to your pageContext file is correct

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
}

export default MyApp;
