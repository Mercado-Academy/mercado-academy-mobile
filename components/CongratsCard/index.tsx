import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  Title,
  Description,
  Award,
  AwardTitle,
  AwardText,
  Button,
  ButtonText,
} from './styles';

const CongratsCard: React.FC = () => {
  return (
    <Container>
      <Title>Parabéns! Trilha 02 completa!</Title>
      <Description>
        Você completou a segunda trilha da Academy! A partir de agora você já
        tem conhecimento suficiente para poder vender e administrar minimamente
        seu negócio.
      </Description>
      <Image source={require('../../assets/images/mercadoicone.png')} />
      <Award>
        <AwardTitle>Recompensa 02:</AwardTitle>
        <AwardText>3x frete grátis</AwardText>
      </Award>
      <Button>
        <ButtonText>Receber</ButtonText>
      </Button>
    </Container>
  );
};

export default CongratsCard;
