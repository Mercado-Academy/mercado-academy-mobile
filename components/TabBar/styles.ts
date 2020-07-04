import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${Colors.light.tint};
  justify-content: space-around;
  margin: 0 10px 5px;
  padding: 10px;
  border-radius: 50px;
`;

export const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const IconText = styled.Text`
  color: #fff;
  font-family: ${Fonts.montserratRegular};
  font-size: ${Fonts.size.smallText}px;
`;
