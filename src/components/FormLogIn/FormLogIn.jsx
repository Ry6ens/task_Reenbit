import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '@/context/AuthContext';

import MyButton from '@/components/UI/MyButton/MyButton';

import EmailIcon from '../Icons/Email/Email';
import LockIcon from '../Icons/Lock/Lock';
import GoogleIcon from '@/components/Icons/Google/Google';
import FacebookIcon from '@/components/Icons/Facebook/Facebook';

import {
  FormContainer,
  Title,
  Error,
  ButtonContainer,
  ButtonGoogle,
  Form,
  InputBox,
  SignUpBox,
} from './FormLogIn.styled';

export default function FormLogIn() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const { logIn, signInWithGoogle, signInWithFacebook } = useAuth();
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
      setError(error.code);
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

  const signInFacebook = async () => {
    try {
      await signInWithFacebook();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <Title>Log In</Title>
      <ButtonContainer>
        <ButtonGoogle onClick={signInGoogle}>
          <GoogleIcon width="18" height="18" />
        </ButtonGoogle>
        <ButtonGoogle onClick={signInFacebook}>
          <FacebookIcon width="24" height="24" />
        </ButtonGoogle>
      </ButtonContainer>
      <Form onSubmit={onSubmit}>
        <InputBox>
          <span>
            <EmailIcon width={24} height={24} />
          </span>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={e => inputChangeHandler(e)}
            required
          />
          <label htmlFor="email">Email</label>
        </InputBox>
        <InputBox>
          <span>
            <LockIcon width={24} height={24} />
          </span>
          <input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={e => inputChangeHandler(e)}
            required
          />
          <label htmlFor="password">Password</label>
        </InputBox>
        <MyButton type="submit">Log In</MyButton>
      </Form>
      {error && <Error>{error}</Error>}
      <SignUpBox>
        <p>Don&apos;t have account?</p>
        <Link href="/signup">Sign Up</Link>
      </SignUpBox>
    </FormContainer>
  );
}
