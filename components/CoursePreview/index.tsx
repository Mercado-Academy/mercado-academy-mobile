import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Rating as RNRating } from 'react-native-elements';

import { ProgressBar } from 'react-native-paper';
import {
  Container,
  IconContainer,
  DetailsContainer,
  TitleContainer,
  Title,
  Duration,
  BottomContainer,
  Rating,
  RatingValue,
  Progress,
  Classes,
  DurationText,
  DurationValue,
} from './styles';

const CoursePreview: React.FC = () => {
  return (
    <Container>
      <IconContainer>
        <MaterialCommunityIcons name="play" size={40} color="#fff" />
      </IconContainer>
      <DetailsContainer>
        <TitleContainer>
          <Title>Como fazer algo</Title>
          <Duration>
            <DurationText>Duração: </DurationText>
            <DurationValue>40m</DurationValue>
          </Duration>
        </TitleContainer>
        <BottomContainer>
          <Rating>
            <RNRating imageSize={12} readonly startingValue={4.5} />
            <RatingValue> (4.5)</RatingValue>
          </Rating>
          <Progress>
            <Classes>03 de 15 aulas</Classes>
            <ProgressBar
              accessibilityStates
              progress={0.5}
              style={{ borderRadius: 10 }}
            />
          </Progress>
        </BottomContainer>
      </DetailsContainer>
    </Container>
  );
};

export default CoursePreview;
