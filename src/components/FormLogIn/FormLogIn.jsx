import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '@/context/AuthContext';

import MyInput from '@/components/UI/MyInput/MyInput';
import MyButton from '@/components/UI/MyButton/MyButton';

import GoogleIcon from '@/components/Icons/Google/Google';
import FacebookIcon from '@/components/Icons/Facebook/Facebook';

import {
  FormContainer,
  Title,
  Button,
  Error,
  ButtonContainer,
  ButtonGoogle,
  Form,
  Label,
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
        <Label htmlFor="email">
          <span>Email</span>
          <MyInput
            id="email"
            type="text"
            name="email"
            value={form.email}
            onChange={e => inputChangeHandler(e)}
            required
          />
        </Label>
        <Label htmlFor="passwordId">
          <span>Password</span>
          <MyInput
            id="passwordId"
            type="password"
            name="password"
            value={form.password}
            onChange={e => inputChangeHandler(e)}
            required
          />
        </Label>

        <MyButton type="submit">Log In</MyButton>
      </Form>
      {error && <Error>{error}</Error>}
      <Button>
        <Link href="/signup">Sign Up</Link>
      </Button>
    </FormContainer>
  );
}
