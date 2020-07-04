import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

const PlatformCard: React.FC = () => {
  return (
    <Container>
      <Image
        source={require('../../assets/images/mercadoshops1.png')}
        style={{
          height: '100%',
        }}
        resizeMode="center"
      />
    </Container>
  );
};

export default PlatformCard;
