import React from 'react';
import { Avatar } from 'react-native-elements';
import { Container, Title } from './styles';

const BenefitsItem: React.FC = () => {
  return (
    <Container>
      <Avatar
        rounded
        size="medium"
        icon={{ name: 'home' }}
        overlayContainerStyle={{ backgroundColor: '#ddd' }}
      />
      <Title>3x frete grátis para suas próximas vendas</Title>
    </Container>
  );
};

export default BenefitsItem;
