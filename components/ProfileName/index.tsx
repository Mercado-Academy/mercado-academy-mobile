import React from 'react';

import { Avatar } from 'react-native-paper';
import { Container } from './styles';
import StyledText from '../StyledText';

const ProfileName: React.FC = () => {
  return (
    <Container>
      <Avatar.Icon accessibilityStates icon="folder" />
      <StyledText style={{ color: '#fff', marginLeft: 5 }}>
        Olá Zé do ML!
      </StyledText>
    </Container>
  );
};

export default ProfileName;
