import '@/styles/globals.css';

import { Nunito } from 'next/font/google';

import type { AppPropsWithLayout } from '@/types';

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'optional',
});

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);

  return (
    <div className={`${nunito.className} `}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}

export default App;
