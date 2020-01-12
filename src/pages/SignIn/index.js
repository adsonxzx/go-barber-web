import React from 'react';
import { MdEmail, MdHttps } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/images/logo.svg';
import { Content } from '../../_layouts/auth/style';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail não pode ser vazio'),
  password: Yup.string()
    .min(6, 'Senha muito curta')
    .required('Senha não pode ser vazia'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Content>
      <img src={logo} alt="" />

      <Form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">
            <MdEmail color="#fff" />
          </label>
          <Input type="text" name="email" id="email" placeholder="Seu e-mail" />
        </div>

        <div className="form-control">
          <label htmlFor="password">
            <MdHttps color="#fff" />
          </label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Sua senha"
          />
        </div>

        <button type="submit">Acessar</button>
      </Form>

      <Link to="/register">Criar Conta Gratuíta</Link>
    </Content>
  );
}