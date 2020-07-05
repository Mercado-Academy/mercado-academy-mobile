import React from 'react';
import { StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Container,
  Separator,
  BottomContainer,
  BottomContainerText,
} from './styles';
import BenefitsItem from '../BenefitsItem';
import Colors from '../../../constants/Colors';

const BenefitsList: React.FC = () => {
  return (
    <Container style={styles.shadow}>
      <BenefitsItem />
      <Separator />
      <BenefitsItem />
      <Separator />
      <BottomContainer>
        <BottomContainerText>Ver todas</BottomContainerText>
        <MaterialCommunityIcons
          name="chevron-right"
          size={20}
          color={Colors.light.tint}
        />
      </BottomContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default BenefitsList;
