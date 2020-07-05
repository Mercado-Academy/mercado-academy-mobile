import React from 'react';
import { Image } from 'react-native';

import { Container } from './styles';

interface PlatformCard {
  source: any;
  color: string;
  height?: string;
}
const PlatformCard: React.FC<PlatformCard> = ({ source, color, height }) => {
  return (
    <Container color={color}>
      <Image
        source={source}
        style={{
          height: height || '100%',
        }}
        resizeMode="contain"
      />
    </Container>
  );
};

export default PlatformCard;
