import React from 'react';
import Image from 'next/image';

import ButtonBack from '../UI/ButtonBack/ButtonBack';

import {
  Container,
  ImageContainer,
  Title,
  Description,
  List,
  Item,
  ItemTitle,
  ItemText,
} from './PostItem.styled';

export default function PostItem({ data }) {
  return (
    <Container>
      <ButtonBack text="GO BACK" />
      <ImageContainer>
        <Image src={data.image} alt={data.name} width={312} height={232} priority />
      </ImageContainer>
      <Title>{data.name}</Title>
      <Description>Informations</Description>
      <List>
        <Item>
          <ItemTitle>Gender</ItemTitle>
          <ItemText>{data.gender}</ItemText>
        </Item>
        <Item>
          <ItemTitle>Status</ItemTitle>
          <ItemText>{data.status}</ItemText>
        </Item>
        <Item>
          <ItemTitle>Specie</ItemTitle>
          <ItemText>{data.specie}</ItemText>
        </Item>
        <Item>
          <ItemTitle>Origin</ItemTitle>
          <ItemText>{data?.origin?.name}</ItemText>
        </Item>
        <Item>
          <ItemTitle>Type</ItemTitle>
          <ItemText>{data.type}</ItemText>
        </Item>
      </List>
    </Container>
  );
}
