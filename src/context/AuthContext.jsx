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
import Loader from '@/components/UI/Loader/Loader';
import { useLocalStorage } from '@/components/hooks/useLocalStorage';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ email: null, uid: null });
  const [loading, setLoading] = useState(true);
  const [setPage, getPage, setQuery, getQuery, setUID] = useLocalStorage();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
        setUID(user.uid);
      } else {
        setUser({ email: null, uid: null });
      }
    });
    setLoading(false);

    return () => unsubscribe();
  }, []);

  // LogIn, SignUp, LogOut
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    setUser({ email: null, uid: null });
    await signOut(auth);
  };

  // Google auth
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Facebook auth
  const facebookProvider = new FacebookAuthProvider();

  const signInWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        logIn,
        logOut,
        signInWithGoogle,
        signInWithFacebook,
      }}
    >
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};
