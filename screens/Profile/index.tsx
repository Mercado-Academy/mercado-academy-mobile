import React from 'react';
import { ScrollView } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import mock from '../../db.mocked.json';

import { Container, Subtitle } from './styles';
import ProfileHeader from '../../components/ProfileHeader';
import RewardCard from '../../components/RewardCard';
import Colors from '../../constants/Colors';
import BenefitsList from '../../components/Benifts/BenefitsList';

const Profile: React.FC = () => {
  return (
    <Container>
      <ProfileHeader />
      <ScrollView
        style={{ padding: 10, flex: 1, marginBottom: 10 }}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <RewardCard
          title="Você já é um vendedor Aprendiz!"
          subTitle="Continue aprendendo para subir de nível!"
          icon={
            <SimpleLineIcons name="badge" size={30} color={Colors.light.tint} />
          }
        />
        <Subtitle>Suas recompensas</Subtitle>
        <BenefitsList rewards={mock.profile.currentRewards} />
        <Subtitle>Próximas recompensas</Subtitle>
        <BenefitsList rewards={mock.profile.nextRewards} />
      </ScrollView>
    </Container>
  );
};

export default Profile;
