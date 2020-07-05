import React from 'react'
import { View, Text } from "react-native"

import { Circle, CircleText } from "./styles"

interface StepProps {
    indicator: number;
}

const Step: React.FC<StepProps> = (props) => {
  return (
    <Circle>
        <CircleText>{props.indicator}</CircleText>
    </Circle>
  )
}

export default Step;