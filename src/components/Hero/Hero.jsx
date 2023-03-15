import Image from 'next/image';

import Logo from '/public/images/logo.png';

import { Section } from './Hero.styled';

export default function Hero() {
  return (
    <Section>
      <Image
        src={Logo}
        width={600}
        height={200}
        alt="logo"
        priority
        style={{ margin: '92px auto 0px' }}
      />
    </Section>
  );
}
