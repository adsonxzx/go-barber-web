import React from 'react';
import { MdEmail, MdHttps, MdPerson } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input } from '@rocketseat/unform';

import { Form, Button } from '../../styles/global';
import { signUpRequest } from '../../store/modules/auth/actions';
import logo from '../../assets/images/logo.svg';
import { Content } from '../../_layouts/auth/style';

export default function SignIn() {
  const dispatch = useDispatch();
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <Content>
      <img src={logo} alt="" />

      <Form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            <MdPerson color="#fff" />
          </label>
          <Input
            name="name"
            type="text"
            id="name"
            placeholder="nome completo"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">
            <MdEmail color="#fff" />
          </label>
          <Input
            name="email"
            type="text"
            id="email"
            placeholder="email@email.com"
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">
            <MdHttps color="#fff" />
          </label>
          <Input
            name="password"
            type="password"
            id="password"
            placeholder="sua senha"
          />
        </div>

        <Button type="submit">Criar conta gratuíta</Button>

        <Link to="/">Já tenho login</Link>
      </Form>
    </Content>
  );
}
