/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { Searchbar } from 'react-native-paper';
import ProfileName from '../../components/ProfileName';
import UpperTextBox from '../../components/UpperTextBox';
import Fonts from '../../constants/Fonts';
import SearchBar from '../../components/HomeSearchBar';

import StyledText from '../../components/StyledText';
import CourseImagePreview from '../../components/CourseImagePreview';
import { Container, SearchContainer, TitleText, SectionTitle } from './styles';

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
          <View style={{ marginRight: 10 }}>
            <CourseImagePreview />
          </View>
          <View style={{ marginRight: 10 }}>
            <CourseImagePreview />
          </View>
          <View style={{ marginRight: 10 }}>
            <CourseImagePreview />
          </View>
        </ScrollView>

        <SectionTitle>Navegue por plataforma</SectionTitle>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <View style={{ marginRight: 10 }}>
            <CourseImagePreview />
          </View>
          <View style={{ marginRight: 10 }}>
            <CourseImagePreview />
          </View>
          <View style={{ marginRight: 10 }}>
            <CourseImagePreview />
          </View>
        </ScrollView>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});

export default HomeScreen;
