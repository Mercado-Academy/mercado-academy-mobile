import React from 'react';

import { Avatar } from 'react-native-paper';
import { Container } from './styles';
import StyledText from '../StyledText';
import Fonts from '../../constants/Fonts';

const ProfileName: React.FC = () => {
  return (
    <Container>
      <Avatar.Icon accessibilityStates icon="user" />
      <StyledText style={{ color: '#fff', marginLeft: 5, fontFamily: Fonts.montserratBold } }>
        Olá Gustavo!
      </StyledText>
    </Container>
  );
};

export default ProfileName;
