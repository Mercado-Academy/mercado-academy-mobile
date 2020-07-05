import React from 'react';
import { Text } from 'react-native'
import { Video } from 'expo-av';

import { useNavigation } from '@react-navigation/native';
import CourseList from '../../components/Course/CourseList/courseCardList';
import { Container, MinorTitle, Small, Title, Content, Button, TextButton } from './courses-styles';

import { AntDesign } from '@expo/vector-icons';


interface CoursesProps {
  route: any;
}


const Courses: React.FC<CoursesProps> = ({route}) => {
  const navigation = useNavigation();

  const { title, duration, description, videos } = route.params;

  return (
    <>
    <Video
      source={{
        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      }}
      rate={1.0}
      volume={1.0}
      isMuted
      resizeMode="cover"
      useNativeControls
      shouldPlay
      style={{ flex: 1 }}
    />
    <Container>
      <Small>Trilha #01</Small>
      <Title>{title}</Title>
      <Small>Duração: {duration}</Small>
      <Button
        onPress={() => navigation.navigate('TrackComplete')}
      >
        <TextButton>
        <AntDesign
          name="play"
          size={15}
          color="#FFF"
        />
          Iniciar curso
        </TextButton>
      </Button>
      <MinorTitle>Resumo do curso</MinorTitle>
      <Content>
        {description}
      </Content>
      <MinorTitle>Cursos</MinorTitle>

      <CourseList 
        videos={videos}
      />
    </Container>
    </>
  );
};

export default Courses;
