import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

import { AuthContextProvider } from '@/context/AuthContext';

import ProtectedRoute from '@/components/ProtectedRoute/ProtectedRoute';
import Navbar from '@/components/Navbar/Navbar';

import GlobalStyles from '@/styles/Global.styled';

export default function App({ Component, pageProps }) {
  const protectedRoutes = ['/'];

  return (
    <AuthContextProvider>
      <ProtectedRoute protectedRoutes={protectedRoutes}>
        <Navbar>
          <style jsx global>{`
            html {
              font-family: ${roboto.style.fontFamily};
            }
          `}</style>
          <GlobalStyles />
          <Component {...pageProps} />
        </Navbar>
      </ProtectedRoute>
    </AuthContextProvider>
  );
}
