import Search from '@/components/Icons/Search/Search';
import { Container, SpanSVG, Input } from './MyInput.styled';

export default function MyInput(props) {
  return (
    <Container>
      <SpanSVG>
        <Search width={24} height={24} />
      </SpanSVG>
      <Input {...props} />
    </Container>
  );
}
