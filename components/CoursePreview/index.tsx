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

interface CoursePreviewProps {
  title: string;
  duration: string;
  rating: number;
  classes: number;
}

const CoursePreview: React.FC<CoursePreviewProps> = ({
  title,
  duration,
  rating,
  classes,
}) => {
  return (
    <Container>
      <IconContainer>
        <MaterialCommunityIcons name="play" size={40} color="#fff" />
      </IconContainer>
      <DetailsContainer>
        <TitleContainer>
          <Title>{title}</Title>
          <Duration>
            <DurationText>Duração: </DurationText>
            <DurationValue>{duration}</DurationValue>
          </Duration>
        </TitleContainer>
        <BottomContainer>
          <Rating>
            <RNRating imageSize={12} readonly startingValue={rating} />
            <RatingValue> ({rating})</RatingValue>
          </Rating>
          <Progress>
            <Classes>{classes} aulas</Classes>
            {/* <ProgressBar
              accessibilityStates
              progress={0.5}
              style={{ borderRadius: 10 }}
            /> */}
          </Progress>
        </BottomContainer>
      </DetailsContainer>
    </Container>
  );
};

export default CoursePreview;
