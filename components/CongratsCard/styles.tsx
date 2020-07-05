import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export const Container = styled.View`
  flex-direction: column;
  padding: 20px;
  box-shadow: 0px 4.30263px 103.263px rgba(0, 0, 0, 0.08);
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
`;

export const Title = styled.Text`
  font-family: ${Fonts.montserratBold};
  font-size: ${Fonts.size.title}px;
  color: ${Colors.light.tint};
  margin-bottom: 30px;
`;

export const Description = styled.Text`
  font-family: ${Fonts.montserratRegular};
  font-size: ${Fonts.size.text}px;
  color: ${Colors.light.text};
  text-align: center;
`;

export const Award = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const AwardTitle = styled.Text`
  font-size: ${Fonts.size.subtitle}px;
  font-family: ${Fonts.montserratRegular};
`;

export const AwardText = styled.Text`
  font-size: ${Fonts.size.title}px;
  font-family: ${Fonts.montserratBold};
  color: ${Colors.light.tint};
`;

export const Button = styled(RectButton)`
  padding: 10px;
  background-color: ${Colors.light.tint};
  border-radius: 10px;
  margin-top: 20px;
  max-width: 100%;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${Fonts.montserratBold};

  font-size: ${Fonts.size.subtitle}px;
  text-transform: uppercase;
  color: #fff;
`;
