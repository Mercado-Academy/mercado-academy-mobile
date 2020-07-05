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
          <StatValue>10+</StatValue>
          <StatDiscription>Horas assistidas</StatDiscription>
        </Stat>
        <Stat>
          <StatValue>2</StatValue>
          <StatDiscription>Trilhas concluidas</StatDiscription>
        </Stat>
        <Stat>
          <StatValue>17</StatValue>
          <StatDiscription>Vídeos assistidos</StatDiscription>
        </Stat>
      </StatsContainer>
    </Container>
  );
};

export default ProfileHeader;
