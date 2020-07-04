import * as React from 'react';
import { Text, TextProps } from './Themed';
import Fonts from '../constants/Fonts';

const StyledText: React.FC<TextProps> = ({ style, ...props }) => {
  return (
    <Text {...props} style={[{ fontFamily: Fonts.montserratRegular }, style]} />
  );
};

export default StyledText;
