import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/context/AuthContext';
import { useLocalStorage } from '@/components/hooks/useLocalStorage';

export default function ProtectedRoute({ children }) {
  const [setUID, getUID] = useLocalStorage();

  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!getUID()) {
      router.push('/login');
    }
  }, [router, user, getUID]);

  return <>{user ? children : null}</>;
}
