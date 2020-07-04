import styled from 'styled-components/native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const Container = styled.View`
  flex: 1;
`;

export const SearchContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 20px;
`;

export const TitleText = styled.Text`
  font-family: ${Fonts.montserratBold};
  font-size: ${Fonts.size.subtilte}px;
  margin-bottom: 10px;
  margin-left: 5px;
  color: #fff;
`;

export const SectionTitle = styled.Text`
  font-family: ${Fonts.montserratBold};
  font-size: ${Fonts.size.subtilte}px;
  color: #000;
  margin-bottom: 5px;
  padding: 0 20px;
`;
