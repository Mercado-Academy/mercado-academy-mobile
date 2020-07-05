import styled from 'styled-components/native';
import Fonts from '../../../constants/Fonts';

export const Container = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
  /* border: 1px solid #eee; */
`;

export const Title = styled.Text`
  font-size: ${Fonts.size.text}px;
  font-family: ${Fonts.montserratBold};
  flex: 1;
  text-align: center;
`;
