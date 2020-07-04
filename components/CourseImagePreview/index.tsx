import React from 'react';
import {
  Container,
  Background,
  CourseName,
  CourseProvider,
  NameContainer,
  Opacity,
} from './styles';

const CourseImagePreview: React.FC = () => {
  return (
    <Container>
      <Background
        source={require('../../assets/images/courses1.png')}
        // resizeMode="cover"
      >
        <Opacity>
          <NameContainer>
            <CourseName>Higienização de produtos</CourseName>
            <CourseProvider>Por Mercado Envios</CourseProvider>
          </NameContainer>
        </Opacity>
      </Background>
    </Container>
  );
};

export default CourseImagePreview;
