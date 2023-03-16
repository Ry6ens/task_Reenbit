import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '@/context/AuthContext';

import MyInput from '@/components/UI/MyInput/MyInput';
import MyButton from '@/components/UI/MyButton/MyButton';

import { FormContainer, Title, Button, Error, Form, Label } from './FormSignUp.styled';

export default function FormSignUp() {
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
      setError(error.code);
    }

    setForm({ email: '', password: '', password_confirm: '' });
  };

  return (
    <FormContainer>
      <Title>Sign Up</Title>
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
        <Label htmlFor="confirmPasswordId">
          <span>Confirm Password</span>
          <MyInput
            id="confirmPasswordId"
            type="password"
            name="password_confirm"
            value={form.password_confirm}
            onChange={e => inputChangeHandler(e)}
            required
          />
        </Label>

        <MyButton type="submit">Sign Up Now</MyButton>
      </Form>
      {error && <Error>{error}</Error>}
      <Button>
        <Link href="/login">Log In</Link>
      </Button>
    </FormContainer>
  );
}
