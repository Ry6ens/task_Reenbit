import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '@/context/AuthContext';

import FormLogIn from '@/components/FormLogIn/FormLogIn';
import GoogleIcon from '@/components/Icons/Google/Google';
import FacebookIcon from '@/components/Icons/Facebook/Facebook';

import {
  Main,
  FormContainer,
  Title,
  Button,
  Error,
  ButtonContainer,
  ButtonGoogle,
} from './login.styled';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const { logIn, signInWithGoogle } = useAuth();
  const router = useRouter();

  function inputChangeHandler(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const onSubmit = async e => {
    e.preventDefault();

    try {
      await logIn(form.email, form.password);
      router.push('/');
    } catch (error) {
      if (error.message.includes('invalid-email')) {
        setError('invalid-email');
      }
      if (error.message.includes('wrong-password')) {
        setError('wrong-password');
      }
    }

    setForm({ email: '', password: '' });
  };

  const signInGoogle = async () => {
    try {
      await signInWithGoogle();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <FormContainer>
        <Title>Log In</Title>
        <ButtonContainer>
          <ButtonGoogle onClick={signInGoogle}>
            <GoogleIcon width="18" height="18" />
          </ButtonGoogle>
          <ButtonGoogle onClick={signInGoogle}>
            <FacebookIcon width="24" height="24" />
          </ButtonGoogle>
        </ButtonContainer>

        <FormLogIn
          email={form.email}
          password={form.password}
          onSubmit={onSubmit}
          inputChangeHandler={inputChangeHandler}
        />
        {error && <Error>{error.replace('Firebase: Error', '')}</Error>}
        <Button>
          <Link href="/signup">Sign Up</Link>
        </Button>
      </FormContainer>
    </Main>
  );
}
