import Image from 'next/image';
import Link from 'next/link';

import { List, Item, ImageContainer, Title, Text } from './PostsList.styled';

export default function PostsList({ posts }) {
  return (
    <List>
      {posts.map(({ id, image, name, species }) => (
        <Item key={id}>
          <Link href={`/${id}`}>
            <ImageContainer>
              <Image
                src={image}
                alt={name}
                width={312}
                height={232}
                priority
                style={{
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </ImageContainer>
            <Title>{name}</Title>
            <Text>{species}</Text>
          </Link>
        </Item>
      ))}
    </List>
  );
}
