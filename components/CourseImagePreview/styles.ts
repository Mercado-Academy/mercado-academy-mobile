import styled from 'styled-components/native';
import StyledText from '../StyledText';
import Fonts from '../../constants/Fonts';

export const Container = styled.View`
  height: 200px;
  width: 300px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;

  border-radius: 10px;

  /* align-items: flex-end; */
`;

export const Opacity = styled.View`
  background-color: #00000070;
  width: 100%;
  height: 100%;
  padding: 10px;

  justify-content: flex-end;
`;

export const NameContainer = styled.View`
  z-index: 2;
`;

export const CourseName = styled(StyledText)`
  font-family: ${Fonts.montserratBold};
  color: #fff;
`;

export const CourseProvider = styled(StyledText)`
  font-family: ${Fonts.montserratLight};
  color: #fff;
`;
