import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import { auth } from '@/lib/firebase';
import { useLocalStorage } from '@/components/hooks/useLocalStorage';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ email: null, uid: null });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [setUID, getUID] = useLocalStorage();

  useEffect(() => {
    const uid = getUID();

    if (uid) {
      setIsAuthenticated(true);
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
        setUID(user.uid);
        setIsAuthenticated(true);
      } else {
        setUser({ email: null, uid: null });
        setUID('');
        setIsAuthenticated(false);
      }
    });

    setLoading(false);

    return () => unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Signup
  const signUp = (email, password) => {
    setIsAuthenticated(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const logIn = (email, password) => {
    setIsAuthenticated(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logOut = async () => {
    setIsAuthenticated(false);
    setUser({ email: null, uid: null });
    setIsAuthenticated(false);
    await signOut(auth);
  };

  // Google auth
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setIsAuthenticated(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Facebook auth
  const facebookProvider = new FacebookAuthProvider();
  const signInWithFacebook = () => {
    setIsAuthenticated(true);
    return signInWithPopup(auth, facebookProvider);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        signUp,
        logIn,
        logOut,
        signInWithGoogle,
        signInWithFacebook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
