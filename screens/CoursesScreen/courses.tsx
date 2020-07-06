import React from 'react';
import { Video } from 'expo-av';

import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Image } from 'react-native-elements';
import CourseList from '../../components/Course/CourseList/courseCardList';
import {
  Container,
  MinorTitle,
  Small,
  Title,
  Content,
  Button,
  TextButton,
} from './courses-styles';

interface CoursesProps {
  route: any;
}

const Courses: React.FC<CoursesProps> = ({ route }) => {
  const navigation = useNavigation();

  const { title, duration, description, videos } = route.params;

  return (
    <>
      {/* <Video
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
        usePoster
      /> */}
      <Image
        source={require('../../assets/images/courses1.png')}
        style={{ height: 300 }}
      />
      <Container>
        <Small>Trilha #01</Small>
        <Title>{title}</Title>
        <Small>Duração: {duration}</Small>
        <Button onPress={() => navigation.navigate('TrackComplete')}>
          <AntDesign name="play" size={15} color="#FFF" />
          <TextButton>Iniciar curso</TextButton>
        </Button>
        <MinorTitle>Resumo do curso</MinorTitle>
        <Content>{description}</Content>
        <MinorTitle>Cursos</MinorTitle>

        <CourseList videos={videos} />
      </Container>
    </>
  );
};

export default Courses;
