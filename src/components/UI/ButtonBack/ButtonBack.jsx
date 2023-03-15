import { useRouter } from 'next/router';
import { Karla } from 'next/font/google';

const karla = Karla({
  weight: '700',
  subsets: ['latin'],
});

import ArrowLeft from '@/components/Icons/ArrowLeft/ArrowLeft';

import { Button, ButtonText } from './ButtonBack.styled';

export default function ButtonBack({ text }) {
  const router = useRouter();

  return (
    <Button type="button" onClick={() => router.back()}>
      <ArrowLeft width={24} height={24} />
      <ButtonText className={karla.className}>{text}</ButtonText>
    </Button>
  );
}
