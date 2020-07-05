import React from 'react';

import { Avatar } from 'react-native-elements';
import {
  Container,
  AvatarContainer,
  Name,
  StatsContainer,
  StatValue,
  StatDiscription,
  Stat,
} from './styles';

const ProfileHeader: React.FC = () => {
  return (
    <Container>
      <AvatarContainer>
        <Avatar
          size="large"
          rounded
          title="GU"
          overlayContainerStyle={{ backgroundColor: '#ccc' }}
          activeOpacity={0.7}
        />
        <Name>Gustavo</Name>
      </AvatarContainer>
      <StatsContainer>
        <Stat>
          <StatValue>175+</StatValue>
          <StatDiscription>Horas</StatDiscription>
        </Stat>
        <Stat>
          <StatValue>175+</StatValue>
          <StatDiscription>Horas</StatDiscription>
        </Stat>
        <Stat>
          <StatValue>175+</StatValue>
          <StatDiscription>Horas</StatDiscription>
        </Stat>
      </StatsContainer>
    </Container>
  );
};

export default ProfileHeader;
