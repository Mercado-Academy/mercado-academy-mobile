import React from 'react';
import { ScrollView } from 'react-native';

import { Container } from './styles';
import ProfileHeader from '../../components/ProfileHeader';
import RewardCard from '../../components/RewardCard';

const Profile: React.FC = () => {
  return (
    <Container>
      <ProfileHeader />
      <ScrollView style={{ flex: 1 }}>
        <RewardCard
          title="Você já é um vendedor Aprendiz!"
          subTitle="Continue aprendendo para subir de nível!"
        />
      </ScrollView>
    </Container>
  );
};

export default Profile;
