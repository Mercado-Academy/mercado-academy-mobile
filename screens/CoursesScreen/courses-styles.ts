import styled from 'styled-components/native';
import Fonts from '../../constants/Fonts';

export const Container = styled.ScrollView`
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.montserratBold}
`;

export const Small = styled.Text`
  font-size: 10px;
  font-family: ${Fonts.montserratRegular}
  color: #009EE3
`;

export const MinorTitle = styled.Text`
  padding-top: 16px;
  font-size: 14px;
  font-family: ${Fonts.montserratBold}
`;

export const Content = styled.Text`
  font-size: 12px;
  font-family: ${Fonts.montserratRegular}
  color: #009EE3;
  padding-top: 8px;
  padding-bottom: 12px;
`;