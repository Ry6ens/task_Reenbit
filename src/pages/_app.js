import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

import GlobalStyles from '@/styles/Global.styled';

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
