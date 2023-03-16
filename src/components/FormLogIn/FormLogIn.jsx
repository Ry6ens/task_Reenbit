import MyInput from '@/components/UI/MyInput/MyInput';
import MyButton from '@/components/UI/MyButton/MyButton';

import { Form, Label } from './FormLogIn.styled';

export default function FormLogIn({ email, password, onSubmit, inputChangeHandler }) {
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

      <MyButton type="submit">Log In</MyButton>
    </Form>
  );
}
