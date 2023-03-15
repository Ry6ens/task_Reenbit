import styled from 'styled-components';
import { device } from '@/styles/Media.variables';

export const Button = styled.button`
  margin-top: 23px;

  display: flex;
  align-items: center;
  gap: 8px;

  background: none;
  border: none;

  cursor: pointer;

  @media ${device.desktop} {
  }
`;

export const ButtonText = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;

  color: #000000;
`;
