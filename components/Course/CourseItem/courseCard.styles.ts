import styled from 'styled-components/native';
import Fonts from '../../../constants/Fonts';


export const Card = styled.View`
  background-color: #FFF;
  padding: 20px;
  margin: 8px 0 0 0;
  border-radius: 14px;
`;

export const Collapse = styled.Text`
  position: absolute;
`

export const Title = styled.Text`
  font-family: ${Fonts.montserratBold}
`;

export const Subtitle = styled.Text`
  padding-top: 2px;
  font-size: 10px;
  font-family: ${Fonts.montserratBold}
  color: #009EE3
`;

export const BodyText = styled.Text`
  padding-top: 12px;
  font-family: ${Fonts.montserratRegular}
  font-size: 12px;
  color: #009EE3;
`;