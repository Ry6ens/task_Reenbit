import { Button } from './MyButton.styled';

export default function MyButton({ onClick, children }) {
  return <Button onClick={onClick}>{children}</Button>;
}
