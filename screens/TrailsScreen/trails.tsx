import React from 'react';
import { ScrollView, FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import UpperTextBox from '../../components/UpperTextBox';
import Trail from '../../components/TrailCard';
import {
  Absolute,
  ContinueButton,
  HeaderText,
  ContinueButtonText,
} from './styles';
import * as data from '../../db.mocked.json';
import Colors from '../../constants/Colors';

const TrailsScreen: React.FC = () => {
  const mensagem = `Nessa trilha você conhecerá os o básico de cada produto dentro do Mercado Livre. É uma visão geral de todo nosso potencial.`;

  const navigation = useNavigation();

  return (
    <ScrollView>
      <UpperTextBox>
        <HeaderText>
          Continue aprendendo seguindo as trilhas que você ainda não completou.
        </HeaderText>
        <ContinueButton onPress={() => console.log('')}>
          <AntDesign name="play" size={15} color={Colors.light.tint} />
          <ContinueButtonText>
            <Text>Continuar de onde parei</Text>
          </ContinueButtonText>
        </ContinueButton>
      </UpperTextBox>
      <Absolute>
        <FlatList
          data={data.courses}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity 
                onPress={() => navigation.navigate('Courses', data.courses.find(x => x.id === item.id))}  
              >
                <Trail
                  title={item.title}
                  indicator={Number(item.id)}
                  videos={item.videos.length}
                  position={Number(item.id) % 2 === 0 ? 'left' : 'right'}
                  bodyText={item.description}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(course) => course.id}
        />
      </Absolute>
    </ScrollView>
  );
};

export default TrailsScreen;
