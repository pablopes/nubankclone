import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import { Code, Container, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({translateY}) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 250],
        outputRange: [0, 1]
      })
    }}>
      <Code>
        <QRCode
          value="https://github.com/pablopes"
          size={80}
          backgroundColor="#FFF"
          color="#8B10AE"
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF"/>
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF"/>
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF"/>
          <NavText>Configurar Cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF"/>
          <NavText>Configurar App</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() =>{}}>
        <SignOutButtonText>Sair do App</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
