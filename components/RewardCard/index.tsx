import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Container,
  IconContainer,
  TextContainer,
  Title,
  Subtitle,
} from './styles';

interface RewardCard {
  title: string;
  subTitle: string;
}

const RewardCard: React.FC<RewardCard> = ({ title, subTitle }) => {
  return (
    <Container>
      <IconContainer>
        <MaterialCommunityIcons name="home" />
      </IconContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
      </TextContainer>
    </Container>
  );
};

export default RewardCard;
