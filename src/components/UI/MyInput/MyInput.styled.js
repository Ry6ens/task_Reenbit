import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 100%;
  max-width: 1020px;
`;

export const Input = styled.input`
  margin: 0 auto;
  padding: 16px 16px 16px 48px;

  width: 100%;

  font-size: 16px;
  line-height: 1.5;

  color: rgba(0, 0, 0, 0.5);

  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const SpanSVG = styled.span`
  position: absolute;
  top: 16px;
  left: 14px;
`;
