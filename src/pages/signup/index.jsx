import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '@/context/AuthContext';

import FormSingUp from '@/components/FormSignUp/FormSignUp';

import { Main, FormContainer, Title, Button, Error } from './signup.styled';

export default function Signup() {
  const [form, setForm] = useState({ email: '', password: '', password_confirm: '' });
  const [error, setError] = useState('');

  const { signUp } = useAuth();
  const router = useRouter();

  function inputChangeHandler(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const onSubmit = async e => {
    e.preventDefault();

    if (form.password !== form.password_confirm) {
      setError('This is wrong password');
      return;
    }

    try {
      await signUp(form.email, form.password);
      router.push('/');
    } catch (error) {
      console.log(error.message);
      if (error.message.includes('invalid-email')) {
        setError('invalid-email');
      }
      if (error.message.includes('weak-password')) {
        setError('Password should be at least 6 characters');
      }
    }

    setForm({ email: '', password: '', password_confirm: '' });
  };

  return (
    <Main>
      <FormContainer>
        <Title>Sign Up</Title>
        <FormSingUp
          email={form.email}
          password={form.password}
          password_confirm={form.password_confirm}
          onSubmit={onSubmit}
          inputChangeHandler={inputChangeHandler}
        />
        {error && <Error>{error.replace('Firebase: Error', '')}</Error>}
        <Button>
          <Link href="/login">Log In</Link>
        </Button>
      </FormContainer>
    </Main>
  );
}
