import React from 'react';
import {
    Container,
    Code,
    Nav,
    NavItem,
    NavText,
    SignOutButton,
    SignOutButtonText
} from "./styles";
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu({ translateY }) {
    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1]
            })
        }}>
            <Code>
                <QRCode
                    value="https://rocketseat.com.br"
                    size={80}
                    backgroundColor="#8B10AE"
                    color="#FFF"
                ></QRCode>
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF" />
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF" />
                    <NavText>Configurações do app</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={() => { }}>
                <SignOutButtonText>Sair do App</SignOutButtonText>
            </SignOutButton>
        </Container >
    );
}