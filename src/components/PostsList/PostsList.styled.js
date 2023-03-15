import styled from 'styled-components';
import { device } from '@/styles/Media.variables';

export const List = styled.ul`
  margin-top: 32px;
  padding: 0px 24px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;

  @media ${device.tablet} {
    justify-content: space-between;
  }

  @media ${device.desktop} {
    width: 1020px;

    margin: 32px auto 0px;
    padding: 0;

    gap: 20px;
  }
`;

export const Item = styled.li`
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;

  @media ${device.desktop} {
    width: 240px;
  }
`;

export const ImageContainer = styled.div`
  height: 232px;
  margin: 0 auto;

  @media ${device.desktop} {
    height: 168px;
  }
`;

export const Title = styled.h2`
  padding: 12px 16px 0px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;

  color: rgba(0, 0, 0, 0.87);
`;

export const Text = styled.p`
  padding: 0px 16px 12px;

  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.25px;

  color: rgba(0, 0, 0, 0.6);
`;
