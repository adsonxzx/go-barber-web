import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Notifications from '../Notifications';

import logoPurple from '../../assets/images/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const { name } = useSelector(state => state.user.profile);
  const nameArray = name.split(' ');

  const nameFormat =
    nameArray.length > 2
      ? `${nameArray[0]} ${nameArray[nameArray.length - 1]}`
      : name;

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
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
