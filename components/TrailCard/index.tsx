import React from 'react'

import Step from "./Steps/step"
import { View, Text } from 'react-native';
import { Card, Title, BodyText, TextContainer, Info } from './styles';

interface TrailSteps {
  title: string;
  bodyText: string;
  position: string;
  indicator: number;
  videos: number
}

const Trail: React.FC<TrailSteps> = ({title, bodyText, position, indicator, number}) => {
  return (
    <Card marginPosition={position}>
      <Step indicator={indicator} />
      <TextContainer marginPosition={position}>
        <Title>{title}</Title>
        <Info>4 vídeos</Info>
        <BodyText>{bodyText}</BodyText>
      </TextContainer>
    </Card>
  )
}

export default Trail;