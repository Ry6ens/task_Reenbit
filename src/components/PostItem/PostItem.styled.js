import styled from 'styled-components';
import { device } from '@/styles/Media.variables';

export const Container = styled.div`
  padding: 0px 24px;

  @media ${device.desktop} {
    margin: 0 auto;
    width: 1440px;
  }
`;

export const ImageContainer = styled.div`
  margin: 78px auto 0px;

  width: 150px;
  height: 150px;

  border: 5px solid #f2f2f7;
  border-radius: 150px;
  overflow: hidden;

  @media ${device.desktop} {
    margin: 32px auto 0px;

    width: 300px;
    height: 300px;
  }
`;

export const Title = styled.h2`
  margin-top: 34px;

  font-size: 32px;
  line-height: 1.2;
  text-align: center;

  color: #081f32;

  @media ${device.desktop} {
    font-size: 48px;
  }
`;

export const Description = styled.p`
  margin: 34px auto 0px;

  max-width: 413px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0.15px;

  color: #8e8e93;

  @media ${`(min-width: 413px)`} {
    text-align: center;
  }
`;

export const List = styled.ul`
  margin: 0 auto;
  padding: 0px 16px;

  max-width: 413px;
`;

export const Item = styled.li`
  padding: 9px 0px 12px;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
`;

export const ItemTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.15px;

  color: #081f32;
`;

export const ItemText = styled.p`
  font-size: 14px;
  letter-spacing: 0.25px;

  color: #6e798c;
`;
