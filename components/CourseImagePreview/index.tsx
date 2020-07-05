import React from 'react';
import {
  Container,
  Background,
  CourseName,
  CourseProvider,
  NameContainer,
  Opacity,
} from './styles';

interface CourseImagePreview {
  name: string;
  provider: string;
  source: string;
}

const CourseImagePreview: React.FC<CourseImagePreview> = ({
  name,
  provider,
  source,
}) => {
  return (
    <Container>
      <Background
        source={{ uri: source }}
        // resizeMode="cover"
      >
        <Opacity>
          <NameContainer>
            <CourseName>{name}</CourseName>
            <CourseProvider>{provider}</CourseProvider>
          </NameContainer>
        </Opacity>
      </Background>
    </Container>
  );
};

export default CourseImagePreview;
