/* eslint-disable no-use-before-define */
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import UpperTextBox from '../../components/UpperTextBox';
import SearchBar from '../../components/HomeSearchBar';
import mock from '../../db.mocked.json';
import CourseImagePreview from '../../components/CourseImagePreview';
import { Container, SearchContainer, TitleText, SectionTitle } from './styles';
import PlatformCard from '../../components/PlatformCard';
import CoursePreview from '../../components/CoursePreview';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <UpperTextBox>
        <SearchContainer>
          <TitleText>O que vamos aprender hoje?</TitleText>
          <SearchBar />
        </SearchContainer>
      </UpperTextBox>
      <ScrollView style={{ flex: 1 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          {mock.homePage.homePageHighlights.map((element) => (
            <TouchableOpacity
              key={element.id}
              style={styles.item}
              onPress={() => navigation.navigate('Cursos')}
            >
              <CourseImagePreview
                name={element.title}
                provider={element.provider}
                source={element.image}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <SectionTitle>Navegue por plataforma</SectionTitle>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <View style={styles.item}>
            <PlatformCard
              color="#f4717f"
              source={require('../../assets/images/mercadoshops1.png')}
              height="50%"
            />
          </View>
          <View style={styles.item}>
            <PlatformCard
              color="#8DCDE9"
              source={require('../../assets/images/mercadopago1.png')}
            />
          </View>
          <View style={styles.item}>
            <PlatformCard
              color="#FFF373"
              source={require('../../assets/images/mercadolivre1.png')}
            />
          </View>
        </ScrollView>

        <SectionTitle>Cursos mais populares da semana</SectionTitle>

        <View style={{ flex: 1, padding: 10 }}>
          {mock.homePage.popularVideos.map((e) => (
            <View key={e.id} style={styles.verticalItem}>
              <CoursePreview
                classes={e.classes}
                rating={e.rating}
                title={e.title}
                duration={e.duration}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  item: {
    marginRight: 10,
  },

  verticalItem: {
    marginBottom: 10,
  },
});

export default HomeScreen;
