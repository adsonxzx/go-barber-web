import styled, { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import { Form as Formulario } from '@rocketseat/unform';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  *:focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  input:-webkit-autofill {
    background-color: #FAFFBD !important;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 0px 20px;
  max-width: 800px;
  margin: 20px auto 0 auto;
`;

export const Form = styled(Formulario)`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  hr {
    margin: 5px 0 20px 0;
    border-color: #eee;
  }

  .form-control {
    background: rgb(0, 0, 0, 0.1);
    margin-bottom: 15px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    height: 44px;

    svg {
      font-size: 16px;
      margin-left: 15px;
    }

    input {
      width: 100%;
      color: #fff;
      background: none;
      border: none;
      padding: 0 15px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  a {
    font-size: 16px;
    color: #fff;
    text-align: center;
    margin-top: 20px;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  background: ${props => (props.type === 'submit' ? '#3b9eff' : 'red')};
  color: #fff;
  border-radius: 4px;
  height: 44px;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;

  &:hover {
    background: ${darken(0.03, '#3b9eff')};
    background: ${props =>
      props.type === 'submit' ? darken(0.03, '#3b9eff') : darken(0.03, 'red')};
  }
`;
