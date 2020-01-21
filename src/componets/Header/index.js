import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Notifications from '../Notifications';

import logoPurple from '../../assets/images/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const nameArray = profile.name.split(' ');

  const url = profile.avatar ? profile.avatar.url : null;

  const nameFormat =
    nameArray.length > 2
      ? `${nameArray[0]} ${nameArray[nameArray.length - 1]}`
      : profile.name;

  return (
    <Container>
      <Content>
        <nav>
          <img src={logoPurple} alt="" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{nameFormat}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>

            <img
              src={
                url ||
                'https://api.adorable.io/avatars/120/abott@adorable.io.png'
              }
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
