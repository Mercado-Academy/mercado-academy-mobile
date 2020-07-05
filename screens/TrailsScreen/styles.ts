import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const ContinueButton = styled(RectButton)`
  padding: 12px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 6px;
  max-width: 200px;
  margin-left: 12px;
  justify-content: center;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const ContinueButtonText = styled.Text`
  margin-left: 5px;
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
