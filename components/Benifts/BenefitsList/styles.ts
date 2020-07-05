import styled from 'styled-components/native';
import Fonts from '../../../constants/Fonts';
import Colors from '../../../constants/Colors';

export const Container = styled.View`
  width: 90%;
  padding: 0 10px 5px;
  background-color: #fff;
  margin: 0 0 20px;
  border-radius: 5px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #eee;
  width: 100%;
`;

export const BottomContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 3px;
`;

export const BottomContainerText = styled.Text`
  font-size: ${Fonts.size.text}px;
  font-family: ${Fonts.montserratBold};
  color: ${Colors.light.tint};
`;
