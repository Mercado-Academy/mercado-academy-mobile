import styled from 'styled-components/native';
import Step from './Steps/step';
import Fonts from '../../constants/Fonts';
import { StyledFunction } from 'styled-components';

const paddingX = 22;
const paddingY = paddingX * 2 - 20;

export interface CardProps {
  marginPosition: string;
}

export interface TextContainerProps {
  marginPosition: string;
}

export const Card = styled.View<CardProps>`
  display: flex;
  flex-direction: ${props => props.marginPosition !== 'left' ? 'row-reverse' : 'row'};
  background-color: #fff;
  padding-left: ${paddingX}px;
  padding-right: ${paddingX}px;
  padding-bottom: ${paddingY}px;
  padding-top: ${paddingY}px;
  border-radius: 15px;
  margin-left: 35px;
  margin-right: 15px;
  margin-top: 25px;
`;

export const TextContainer = styled.View<TextContainerProps>`
  display: flex;
  flex-direction: column;
  ${props => props.marginPosition === 'left' ? 'padding-left: 24px;' : 'padding-right: 24px'};
  ${props => props.marginPosition !== 'left' ? 'padding-left: 48px;' : 'padding-right: 48px'};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${Fonts.montserratBold}
  `;

export const Info = styled.Text`
  font-size: 10px;
  color: #009EE3
  font-family: ${Fonts.montserratRegular}
`;
  
  export const BodyText = styled.Text`
  font-weight: normal;
  font-family: ${Fonts.montserratBold}
  font-size: 12px;
  color: #009EE3
  text-align: left;
`;