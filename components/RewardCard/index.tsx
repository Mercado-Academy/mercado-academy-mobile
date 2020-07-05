import React from 'react';

import { SimpleLineIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
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
  icon: JSX.Element;
}

const RewardCard: React.FC<RewardCard> = ({ title, subTitle, icon }) => {
  return (
    <Container style={styles.shadow}>
      <IconContainer>{icon}</IconContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
      </TextContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default RewardCard;
