import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  display: flex;
  flex-direction: column;

  form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
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

  button {
    border: none;
    background: #3b9eff;
    color: #fff;
    border-radius: 4px;
    height: 44px;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      background: ${darken(0.03, '#3b9eff')};
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
