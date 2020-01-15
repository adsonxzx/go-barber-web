import React from 'react';
import { MdEmail, MdHttps } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/images/logo.svg';
import { Content } from '../../_layouts/auth/style';
import { signInRequest } from '../../store/modules/auth/actions';
import { Form, Button } from '../../styles/global';

export default function SignIn() {
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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

        <Button type="submit">{loading ? 'Carregando' : 'Acessar'}</Button>

        <Link to="/register">Criar Conta Gratuíta</Link>
      </Form>
    </Content>
  );
}
