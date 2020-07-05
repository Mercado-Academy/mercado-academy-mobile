import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const Button = styled(RectButton)`
  padding: 12px;
  background-color: ${Colors.light.tint};
  border-radius: 10px;
  margin-top: 20px;
  max-width: 150px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-family: ${Fonts.montserratBold};
  margin-left: 10px;
`;

export const Container = styled.ScrollView`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.montserratBold};
`;

export const Small = styled.Text`
  font-size: 10px;
  font-family: ${Fonts.montserratRegular}
  color: #009EE3
`;

export const MinorTitle = styled.Text`
  padding-top: 16px;
  font-size: 14px;
  font-family: ${Fonts.montserratBold};
`;

export const Content = styled.Text`
  font-size: 12px;
  font-family: ${Fonts.montserratRegular}
  color: #009EE3;
  padding-top: 8px;
  padding-bottom: 12px;
`;
