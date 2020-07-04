/* eslint-disable no-use-before-define */
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import UpperTextBox from '../../components/UpperTextBox';
import SearchBar from '../../components/HomeSearchBar';

import CourseImagePreview from '../../components/CourseImagePreview';
import { Container, SearchContainer, TitleText, SectionTitle } from './styles';
import PlatformCard from '../../components/PlatformCard';
import CoursePreview from '../../components/CoursePreview';

const HomeScreen: React.FC = () => {
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
          <View style={styles.item}>
            <CourseImagePreview />
          </View>
          <View style={styles.item}>
            <CourseImagePreview />
          </View>
          <View style={styles.item}>
            <CourseImagePreview />
          </View>
        </ScrollView>

        <SectionTitle>Navegue por plataforma</SectionTitle>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <View style={styles.item}>
            <PlatformCard />
          </View>
          <View style={styles.item}>
            <PlatformCard />
          </View>
          <View style={styles.item}>
            <PlatformCard />
          </View>
        </ScrollView>

        <SectionTitle>Cursos mais populares da semana</SectionTitle>

        <View style={{ flex: 1, padding: 10 }}>
          <View style={styles.verticalItem}>
            <CoursePreview />
          </View>
          <View style={styles.verticalItem}>
            <CoursePreview />
          </View>
          <View style={styles.verticalItem}>
            <CoursePreview />
          </View>
          <View style={styles.verticalItem}>
            <CoursePreview />
          </View>
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
