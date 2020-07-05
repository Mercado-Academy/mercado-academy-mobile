import styled from 'styled-components/native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const Container = styled.View`
  flex-direction: row;
  background-color: #fff;
  padding: 20px 10px;
  border-radius: 5px;
  margin: 5px;
  justify-content: space-around;
  width: 90%;
`;

export const IconContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  margin: auto;
  padding: 0 10px;
`;

export const TextContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${Fonts.montserratBold};
  font-size: ${Fonts.size.text}px;
  text-align: center;
  color: ${Colors.light.tint};
`;

export const Subtitle = styled.Text`
  font-family: ${Fonts.montserratRegular};
  font-size: ${Fonts.size.smallText}px;
  text-align: center;
`;
