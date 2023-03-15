import styled from 'styled-components';
import { device } from '@/styles/Media.variables';

export const Section = styled.section`
  margin-top: 32px;
  padding: 0px 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.desktop} {
    padding: 0px;
  }
`;
