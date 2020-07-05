import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

interface PlatformCard {
  image: string;
  color: string;
}
const PlatformCard: React.FC = () => {
  return (
    <Container>
      <Image
        source={{
          uri:
            'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.6.1/mercadopago/logo__small.png',
          height: 100,
        }}
      />
    </Container>
  );
};

export default PlatformCard;
