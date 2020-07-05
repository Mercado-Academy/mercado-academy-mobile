import React from 'react';
import { Video } from 'expo-av';

import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CourseList from '../../components/Course/CourseList/courseCardList';
import { Container, MinorTitle, Small, Title, Content } from './courses-styles';

const Courses: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
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
        style={{ width: 370, height: 300 }}
      />
      <Small>Trilha #01</Small>
      <Title>Como anunciar um produto?</Title>
      <Small>Duração:</Small>
      <Button
        title="Iniciar trilha"
        onPress={() => navigation.navigate('TrackComplete')}
      />
      <MinorTitle>Resumo do curso</MinorTitle>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        nisi massa, fringilla nec libero eget, eleifend faucibus arcu. Donec non
        posuere libero. Vivamus ut pulvinar tellus, eget dignissim quam. Aenean
        suscipit porta risus, sit amet tempus massa malesuada eget. In
        ullamcorper rhoncus leo nec aliquet. Pellentesque ac turpis et nisl
        faucibus ultricies. Mauris massa purus, tincidunt vel luctus vitae,
        aliquet a justo. Integer non urna dolor.
      </Content>
      <MinorTitle>Cursos</MinorTitle>

      <CourseList />
    </Container>
  );
};

export default Courses;
