import styled from 'styled-components/native';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export const Container = styled.View`
  background-color: ${Colors.light.tint};
  padding: 10px 10px 30px;
  border-bottom-right-radius: 40px;
`;

export const AvatarContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-family: ${Fonts.montserratBold};
  font-size: ${Fonts.size.subtitle}px;
  color: #fff;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StatValue = styled.Text`
  font-family: ${Fonts.montserratRegular};
  font-size: ${Fonts.size.subtitle}px;
  color: #fff;
`;

export const StatDiscription = styled.Text`
  font-family: ${Fonts.montserratBold};
  font-size: ${Fonts.size.subtitle}px;
  color: #fff;
`;

export const Stat = styled.View`
  align-items: center;
  flex: 1;
`;
