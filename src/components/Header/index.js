import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-color.SVG';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarder" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Diego Fernandes</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png"
              alt="Diego Fernandes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
