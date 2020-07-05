import React from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList, Button } from 'react-native';
import ProfileName from '../../components/ProfileName';
import UpperTextBox from '../../components/UpperTextBox';
import Trail from '../../components/TrailCard';
import { Absolute, ContinueButton, Container, HeaderText } from './styles';
import * as data from '../../db.mocked.json'
import { TouchableOpacity } from 'react-native-gesture-handler';

const TrailsScreen: React.FC = () => {
  const mensagem = `Nessa trilha você conhecerá os o básico de cada produto dentro do Mercado Livre. É uma visão geral de todo nosso potencial.`;
  return (
    <ScrollView>
      <UpperTextBox>
        <HeaderText>Continue aprendendo seguindo as trilhas que você ainda não completou.</HeaderText>    
        <ContinueButton 
          title="Continuar de onde parei"
          onPress={() => console.log('')}>
        </ContinueButton>    
      </UpperTextBox>
      <Absolute>
        <FlatList
          data={data.trail.courses}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
                <Trail
                  title={item.title}
                  indicator={Number(item.id)}
                  videos={item.videos}
                  position={Number(item.id) % 2 === 0 ? 'left' : 'right'}
                  bodyText={item.description}
                />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(course) => course.id}
        />
      </Absolute>
    </ScrollView>
  );
};

export default TrailsScreen;
