import MyInput from '@/components/UI/MyInput/MyInput';
import MyButton from '@/components/UI/MyButton/MyButton';

import { Form, Label } from './FormSignUp.styled';

export default function FormSignUp({
  email,
  password,
  password_confirm,
  onSubmit,
  inputChangeHandler,
}) {
  return (
    <Form onSubmit={onSubmit}>
      <Label htmlFor="email">
        <span>Email</span>
        <MyInput
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={e => inputChangeHandler(e)}
        />
      </Label>
      <Label htmlFor="passwordId">
        <span>Password</span>
        <MyInput
          id="passwordId"
          type="password"
          name="password"
          value={password}
          onChange={e => inputChangeHandler(e)}
        />
      </Label>
      <Label htmlFor="confirmPasswordId">
        <span>Confirm Password</span>
        <MyInput
          id="confirmPasswordId"
          type="password"
          name="password_confirm"
          value={password_confirm}
          onChange={e => inputChangeHandler(e)}
        />
      </Label>

      <MyButton type="submit">Sign Up Now</MyButton>
    </Form>
  );
}
