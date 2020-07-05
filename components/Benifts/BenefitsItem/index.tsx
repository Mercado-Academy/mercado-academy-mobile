import React from 'react';
import { Avatar } from 'react-native-elements';
import { Container, Title } from './styles';
import Colors from '../../../constants/Colors';

interface BenefitsItemProps {
  title: string;
  iconName: string;
}
const BenefitsItem: React.FC<BenefitsItemProps> = ({ title, iconName }) => {
  return (
    <Container>
      <Avatar
        rounded
        size="medium"
        icon={{ name: iconName }}
        overlayContainerStyle={{ backgroundColor: Colors.light.tint }}
      />
      <Title>{title}</Title>
    </Container>
  );
};

export default BenefitsItem;
