import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

import Navbar from '@/components/Navbar/Navbar';
import { AuthContextProvider } from '@/context/AuthContext';

import GlobalStyles from '@/styles/Global.styled';

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar>
        <style jsx global>{`
          html {
            font-family: ${roboto.style.fontFamily};
          }
        `}</style>
        <GlobalStyles />
        <Component {...pageProps} />
      </Navbar>
    </AuthContextProvider>
  );
}
