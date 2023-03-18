import styled from 'styled-components';

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

export const Form = styled.form`
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  max-width: 300px;
`;

export const InputBox = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #162938;

  & span {
    position: absolute;
    right: 8px;
    font-size: 2.3em;
  }

  & input {
    padding: 0px 36px 0px 8px;
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;

    &:focus ~ label,
    &:valid ~ label {
      top: 0px;
      font-size: 14px;
      transition: top 0.3s;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  & label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: #162938;
    pointer-events: none;
  }
`;
