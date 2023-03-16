import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
  padding: 0px 24px;

  display: flex;
  align-items: center;

  height: 100vh;
`;

export const FormContainer = styled.div`
  margin: 0 auto;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 500px;

  border: 1px solid rgb(0 0 0 / 20%);
  box-shadow: 0px 1px 5px rgb(0 0 0 / 20%), 0px 3px 4px rgb(0 0 0 / 12%),
    0px 2px 4px rgb(0 0 0 / 14%);
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
`;

export const Button = styled.div`
  margin-top: 32px;

  color: blue;
`;

export const Error = styled.span`
  margin-top: 10px;

  color: red;
  text-align: center;
`;
