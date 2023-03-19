import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/context/AuthContext';

import Loader from '../UI/Loader/Loader';

export default function ProtectedRoute({ protectedRoutes, children }) {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1;

  useEffect(() => {
    if (!loading && !isAuthenticated && pathIsProtected) {
      router.push('/login');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, isAuthenticated, pathIsProtected]);

  if ((loading || !isAuthenticated) && pathIsProtected) {
    return <Loader />;
  }

  return children;
}
