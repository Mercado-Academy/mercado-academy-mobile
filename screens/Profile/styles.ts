import styled from 'styled-components/native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const Container = styled.View`
  flex: 1;
`;

export const Subtitle = styled.Text`
  font-size: ${Fonts.size.subtitle}px;
  font-family: ${Fonts.montserratBold};
  margin: 10px 0;
  color: ${Colors.light.tint};
`;
