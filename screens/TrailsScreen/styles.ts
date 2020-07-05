import styled from 'styled-components/native';
import Fonts from '../../constants/Fonts';

export const ContinueButton = styled.Button`
  border-radius: 15px;
`;

export const HeaderText = styled.Text`
  color: #fff;
  padding: 10px 15px 35px;

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
