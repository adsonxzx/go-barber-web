import React from 'react';
import { MdEmail, MdHttps, MdPerson } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { updateProfileRequest } from '../../store/modules/user/actions';
import { signOut } from '../../store/modules/auth/actions';
import { Content, Form, Button } from '../../styles/global';
import Avatar from './Avatar';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  async function handleSubmit(data) {
    console.log(data);
    dispatch(updateProfileRequest(data));
  }

  return (
    <Content>
      <Form onSubmit={handleSubmit} initialData={profile}>
        <Avatar name="avatar_id" />

        <div className="form-control">
          <label htmlFor="name">
            <MdPerson color="#fff" />
          </label>
          <Input type="text" name="name" id="name" placeholder="Seu nome" />
        </div>

        <div className="form-control">
          <label htmlFor="email">
            <MdEmail color="#fff" />
          </label>
          <Input type="text" name="email" id="email" placeholder="Seu e-mail" />
        </div>

        <hr />

        <div className="form-control">
          <label htmlFor="oldPassword">
            <MdHttps color="#fff" />
          </label>
          <Input
            type="password"
            name="oldPassword"
            id="oldPassword"
            placeholder="Sua senha atual"
          />
        </div>

        <div className="form-control">
          <label htmlFor="password">
            <MdHttps color="#fff" />
          </label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Nova senha"
          />
        </div>

        <div className="form-control">
          <label htmlFor="confirmPassword">
            <MdHttps color="#fff" />
          </label>
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirmação da senha"
          />
        </div>

        <Button type="submit">Atualizar perfil</Button>
      </Form>

      <Button onClick={() => dispatch(signOut())}>Sair do Gobarber</Button>
    </Content>
  );
}
