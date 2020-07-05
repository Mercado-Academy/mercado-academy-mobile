import styled from 'styled-components/native';
import Fonts from '../../constants/Fonts';
import { RectButton } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';

export const ContinueButton = styled(RectButton)`
  padding: 12px;
  background-color: #FFF;
  border-radius: 10px;
  margin-top: 6px;
  max-width: 55%;
  margin-left: 12px;
  justify-content: center;
  margin-bottom: 16px;
`;

export const ContinueButtonText = styled.Text`
  color: ${Colors.light.tint};
  font-family: ${Fonts.montserratBold};
`;


export const HeaderText = styled.Text`
  color: #fff;
  padding: 10px 15px 15px;
  font-family: ${Fonts.montserratRegular};
`;

export const Absolute = styled.View`
  top: -50px;
  bottom: 0;
  z-index: 2;
`;

export const Container = styled.View`
  position: relative;
  background-color: #000;
`;
