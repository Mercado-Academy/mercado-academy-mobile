import styled from 'styled-components/native';
import Fonts from '../../constants/Fonts';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
`;

export const IconContainer = styled.View`
  padding: 10px;
  background-color: red;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const DetailsContainer = styled.View`
  width: 100%;
  padding: 0 10px;
  flex: 1;
`;

export const TitleContainer = styled.View``;

export const Title = styled.Text`
  font-family: ${Fonts.montserratBold};
  font-size: ${Fonts.size.text}px;
`;

export const Duration = styled.View`
  flex-direction: row;
`;

export const DurationText = styled.Text`
  font-family: ${Fonts.montserratBold};
  font-size: ${Fonts.size.smallerText}px;
`;

export const DurationValue = styled.Text`
  font-family: ${Fonts.montserratRegular};
  font-size: ${Fonts.size.smallerText}px;
`;

export const BottomContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const Rating = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const RatingValue = styled.Text`
  font-family: ${Fonts.montserratBold};
  font-size: ${Fonts.size.smallerText}px;
`;

export const Progress = styled.View`
  align-items: flex-end;
`;

export const Classes = styled.Text`
  font-family: ${Fonts.montserratBold};
  font-size: ${Fonts.size.smallText}px;
`;
